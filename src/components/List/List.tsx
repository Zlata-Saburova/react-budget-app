import { useContext } from "react";
import { ExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { ListItem } from "../ListItem/ListItem";
import { StyledList } from "./styles";

export const List = () => {
  const { expenses } = useContext(ExpensesContext);
  return (
    <StyledList>
      {expenses.map((buy) => {
        return <ListItem key={buy.id} buy={buy}></ListItem>;
      })}
    </StyledList>
  );
};
