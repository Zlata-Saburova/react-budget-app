import { IExpenses } from "../../context/ExpensesContext/types";
import { Badge } from "../Badge/Badge";
import { Close } from "../Close/Close";
import { StyledListItem } from "./styles";

interface IProps {
  expense: IExpenses;
}

export const ListItem: React.FC<IProps> = ({ expense }) => {
  return (
    <StyledListItem>
      {expense.name} <Badge cost={expense.cost} /> <Close />
    </StyledListItem>
  );
};
