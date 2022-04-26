import { StyledBadge } from "./StyledBadge";

interface IProps {
  children: string;
}

export const Badge = ({ children }: IProps) => {
  return <StyledBadge>{children}</StyledBadge>;
};
