import { ReactNode } from "react";
import { StyledEditButton } from "./styles";

interface IProps {
  children: ReactNode;
  handleEditButton: () => void;
}
export const EditButton = ({ children, handleEditButton }: IProps) => {
  return (
    <StyledEditButton onClick={handleEditButton}>{children}</StyledEditButton>
  );
};
