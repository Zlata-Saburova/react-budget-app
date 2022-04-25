import { StyledCard } from "./StyledCard";

interface IProps {
  children: string;
  type: string;
}
export const Card = ({ children, type }: IProps) => {
  return <StyledCard type={type}>{children}</StyledCard>;
};
