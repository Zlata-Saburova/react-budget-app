import { useContext } from "react";
import { ExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { IExpenses } from "../../context/ExpensesContext/types";
import { Badge } from "../Badge/Badge";
import { Close } from "../Close/Close";
import { StyledListItem } from "./styles";

interface IProps {
  buy: IExpenses;
}

export const ListItem: React.FC<IProps> = ({ buy }) => {
  const { expenses, setExpenses } = useContext(ExpensesContext);

  const deleteBuy = () => {
    const newExpenses = expenses.filter((expense) => expense.id !== buy.id);

    setExpenses(newExpenses);
  };
  return (
    <StyledListItem>
      {buy.name} <Badge cost={buy.cost} /> <Close onClick={deleteBuy} />
    </StyledListItem>
  );
};
