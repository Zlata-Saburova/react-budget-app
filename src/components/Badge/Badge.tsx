import { StyledBadge } from "./styles";

interface IProps {
  cost: number;
}

export const Badge = ({ cost }: IProps) => {
  return <StyledBadge>{`$${cost}`}</StyledBadge>;
};
