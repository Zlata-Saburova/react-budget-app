import { ReactNode } from "react";
import { StyledSaveButton } from "./styles";

interface IProps {
  children: ReactNode;
  handleSaveButton: () => void;
}

export const SaveButton = ({ children, handleSaveButton }: IProps) => {
  return (
    <StyledSaveButton onClick={handleSaveButton}>{children}</StyledSaveButton>
  );
};
