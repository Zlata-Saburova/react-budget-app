import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { ListItem } from "../ListItem/ListItem";
import { StyledList } from "./styles";

export const List = () => {
  const { expenses } = useExpensesContext();
  return (
    <StyledList>
      {expenses.map((buy) => {
        return <ListItem key={buy.id} buy={buy}></ListItem>;
      })}
    </StyledList>
  );
};
