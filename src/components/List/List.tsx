import { useContext } from "react";
import { ExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { ListItem } from "../ListItem/ListItem";
import { StyledList } from "./styles";

export const List = () => {
  const { expenses } = useContext(ExpensesContext);
  return (
    <StyledList>
      {expenses.map((expense) => {
        return <ListItem key={expense.id} expense={expense}></ListItem>;
      })}
    </StyledList>
  );
};
