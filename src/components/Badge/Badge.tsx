import { StyledBadge } from "./styles";

interface IProps {
  children: string;
}

export const Badge = ({ children }: IProps) => {
  return <StyledBadge>{children}</StyledBadge>;
};
