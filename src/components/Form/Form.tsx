import { ReactNode } from "react";
import { StyledForm } from "./SyledForm";

interface IProps {
  children: ReactNode;
}

export const Form: React.FC<IProps> = ({ children }) => {
  return <StyledForm>{children}</StyledForm>;
};
