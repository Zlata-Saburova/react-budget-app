import { ChangeEvent } from "react";
import { StyledCardInput } from "./style";

interface IProps {
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CardInput = ({ handleInput }: IProps) => {
  return (
    <StyledCardInput
      onChange={handleInput}
      placeholder="Enter  budget ..."
      type="number"
    ></StyledCardInput>
  );
};
