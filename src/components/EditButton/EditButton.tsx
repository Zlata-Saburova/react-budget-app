import { ReactNode } from "react";
import { StyledEditButton } from "./styles";

interface Iprops {
  children: ReactNode;
  handleEditButton: () => void;
}
export const EditButton: React.FC<Iprops> = ({
  children,
  handleEditButton,
}) => {
  return (
    <StyledEditButton onClick={handleEditButton}>{children}</StyledEditButton>
  );
};
