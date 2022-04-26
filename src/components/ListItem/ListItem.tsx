import { ReactNode } from "react";
import { StyledListItem } from "./StyledListItem";

interface IProps {
  children: ReactNode;
}

export const ListItem: React.FC<IProps> = ({ children }) => {
  return <StyledListItem>{children}</StyledListItem>;
};
