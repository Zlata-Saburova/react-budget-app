import { StyledCard } from "./StyledCard";
import { ReactNode } from "react";

interface IProps {
  type: string;
  children: ReactNode;
}

export const Card: React.FC<IProps> = ({ type, children }) => {
  return <StyledCard type={type}>{children}</StyledCard>;
};
