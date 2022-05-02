import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { IExpenses } from "../../context/ExpensesContext/types";
import { Badge } from "../Badge/Badge";
import { Close } from "../Close/Close";
import { StyledListItem } from "./styles";

interface IProps {
  buy: IExpenses;
}

export const ListItem = ({ buy }: IProps) => {
  const { deleteExpense } = useExpensesContext();

  const handleDelete = () => {
    deleteExpense(buy.id);
  };

  return (
    <StyledListItem>
      {buy.name} <Badge cost={buy.cost} />
      <Close onClick={handleDelete} />
    </StyledListItem>
  );
};
