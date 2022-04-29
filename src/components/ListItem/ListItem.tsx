import { IExpenses } from "../../context/ExpensesContext/types";
import { Badge } from "../Badge/Badge";
import { Close } from "../Close/Close";
import { StyledListItem } from "./styles";

interface IProps {
  buy: IExpenses;
}

export const ListItem: React.FC<IProps> = ({ buy }) => {
  return (
    <StyledListItem>
      {buy.name} <Badge cost={buy.cost} /> <Close />
    </StyledListItem>
  );
};
