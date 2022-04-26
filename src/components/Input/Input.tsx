import { StyledInput } from "./StyledInput";

interface IProps {
  name: string;
  type: string;
}

export const Input = ({ name, type }: IProps) => {
  return (
    <StyledInput name={name} type={type} placeholder={`enter ${name} ...`} />
  );
};
