import { createContext, FC, useContext, useState } from "react";
import {
  IExpenses,
  IExpensesContex,
  IExpensesContexProviderProprs,
} from "./types";
import { v4 as uuidv4 } from "uuid";

const ExpensesContext = createContext<IExpensesContex>({
  expenses: [],
  setExpenses: (newExpenses: IExpenses[]) => {},
  deleteExpense: (id: string) => {},
});

const useExpensesContexValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpensesContex>(
    () => ({
      expenses: [
        { id: uuidv4(), name: "shopping", cost: 100 },
        { id: uuidv4(), name: "books", cost: 500 },
      ],
      setExpenses: (newExpenses: IExpenses[]) => {
        setExpensesContext((ctx) => ({ ...ctx, expenses: newExpenses }));
      },
      deleteExpense: (id: string) => {
        setExpensesContext((ctx) => ({
          ...ctx,
          expenses: ctx.expenses.filter((expense) => expense.id !== id),
        }));
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
