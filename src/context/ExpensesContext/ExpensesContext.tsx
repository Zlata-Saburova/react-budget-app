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
      expenses: [],
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
