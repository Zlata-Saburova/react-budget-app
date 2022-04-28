import { ReactNode } from "react";
import { StyledList } from "./styles";

interface IProps {
  children: ReactNode;
}

export const List: React.FC<IProps> = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};
