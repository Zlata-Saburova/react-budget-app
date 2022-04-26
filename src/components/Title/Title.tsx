import { StyledTitle } from "./StyledTitle";

interface IProps {
  children: string;
}

export const Title = ({ children }: IProps) => {
  return <StyledTitle>{children}</StyledTitle>;
};
