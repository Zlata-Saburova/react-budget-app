import { ReactNode } from "react";
import { StyledCardButton } from "./styles";

interface Iprops {
  children: ReactNode;
}
export const CardButton: React.FC<Iprops> = ({ children }) => {
  return <StyledCardButton>{children}</StyledCardButton>;
};
