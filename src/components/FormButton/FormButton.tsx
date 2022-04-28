import { StyledFormButton } from "./styles";

interface IProps {
  children: string;
}

export const FormButton = ({ children }: IProps) => {
  return <StyledFormButton type="submit">{children}</StyledFormButton>;
};
