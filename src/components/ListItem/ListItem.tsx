import { StyledListItem } from "./StyledListItem";

interface IProps {
  children: string;
}

export const ListItem = ({ children }: IProps) => {
  return <StyledListItem>{children}</StyledListItem>;
};
