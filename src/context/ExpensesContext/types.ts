import { ReactNode } from "react";

export interface IExpensesContexProviderProprs {
  children: ReactNode;
}

export interface IExpensesContex {
  expenses: IExpenses[];
  setExpenses: (newExpenses: IExpenses[]) => void;
}

export interface IExpenses {
  id: string;
  name: string;
  cost: number;
}
