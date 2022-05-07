import { ChangeEvent, useEffect, useState } from "react";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { IExpenses } from "../../context/ExpensesContext/types";
import { List } from "../List/List";
import { SearchInput } from "../SearchInput/SearchInput";
import { Title } from "../Title/Title";

export const ListContainer = () => {
  const { expenses } = useExpensesContext();

  const [findValue, setFindValue] = useState<string>("");
  const [findedExpenses, setFindedExpenses] = useState<IExpenses[]>([]);

  const handlerSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFindValue(e.target.value);
  };

  useEffect(() => {
    const findExpenses = expenses;
    setFindedExpenses(
      findExpenses.filter((buy) =>
        buy.name.toLowerCase().includes(findValue.toLowerCase())
      )
    );
  }, [findValue, expenses]);

  return (
    <>
      <Title>Expenses</Title>
      <SearchInput findValue={findValue} handlerSearch={handlerSearch} />
      <List findedExpenses={findedExpenses}></List>{" "}
    </>
  );
};
