import { StyledCard } from "./styles";
import { ReactNode } from "react";

interface IProps {
  type: string;
  children: ReactNode;
  isEdit?: boolean;
}

export const Card = ({ type, children }: IProps) => {
  return <StyledCard type={type}>{children}</StyledCard>;
};
