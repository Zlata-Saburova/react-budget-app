import { ReactNode } from "react";
import { StyledCardButton } from "./styles";

interface Iprops {
  children: ReactNode;
  handleButton: () => void;
}
export const CardButton: React.FC<Iprops> = ({ children, handleButton }) => {
  return <StyledCardButton onClick={handleButton}>{children}</StyledCardButton>;
};
