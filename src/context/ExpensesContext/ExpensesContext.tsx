import { createContext, FC, useState } from "react";
import {
  IExpenses,
  IExpensesContex,
  IExpensesContexProviderProprs,
} from "./types";

export const ExpensesContext = createContext<IExpensesContex>({
  expenses: [],
  setExpenses: (newExpenses: IExpenses[]) => {},
});

const useExpensesContexValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpensesContex>(
    () => ({
      expenses: [
        { id: "123", name: "ps5", cost: 5868 },
        { id: "125", name: "table", cost: 568 },
      ],
      setExpenses: (newExpenses: IExpenses[]) => {
        setExpensesContext((ctx) => ({ ...ctx, expenses: newExpenses }));
      },
    })
  );

  return expensesContext;
};

export const ExpensesContextProvider: FC<IExpensesContexProviderProprs> = ({
  children,
}) => {
  return (
    <ExpensesContext.Provider value={useExpensesContexValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
