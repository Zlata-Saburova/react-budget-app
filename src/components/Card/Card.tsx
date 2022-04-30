import { StyledCard } from "./styles";
import { ReactNode, useContext } from "react";
import { BudgetContext } from "../../context/BudgetContext/BudgetContext";

interface IProps {
  type: string;
  children: ReactNode;
  isEdit?: boolean;
}

export const Card: React.FC<IProps> = ({ type, children }) => {
  

  return <StyledCard type={type}>{children}</StyledCard>;
};
