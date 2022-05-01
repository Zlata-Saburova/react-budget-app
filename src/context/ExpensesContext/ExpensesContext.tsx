import { createContext, FC, useContext, useState } from "react";
import {
  IExpenses,
  IExpensesContex,
  IExpensesContexProviderProprs,
} from "./types";

const ExpensesContext = createContext<IExpensesContex>({
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

export const useExpensesContext = () =>
  useContext<IExpensesContex>(ExpensesContext);

export const ExpensesContextProvider: FC<IExpensesContexProviderProprs> = ({
  children,
}) => {
  return (
    <ExpensesContext.Provider value={useExpensesContexValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
