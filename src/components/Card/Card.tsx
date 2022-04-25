import { StyledCard } from "./StyledCard";

interface IProps {
  children: string;
  isBudget?: true;
  isRemaining?: true;
}
export const Card = ({ children, isBudget, isRemaining}: IProps) => {
  return (
    <StyledCard isBudget={isBudget} isRemaining={isRemaining} >
      {children}
    </StyledCard>
  );
};
