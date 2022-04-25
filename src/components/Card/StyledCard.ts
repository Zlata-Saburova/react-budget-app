import styled from "styled-components";

interface IProps {
  isBudget?: true;
  isRemaining?: true;
}
export const StyledCard = styled.div<IProps>`
  width: 100%;
  padding-top: 36px;
  padding-bottom: 40px;
  padding-left: 20px;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  background-color: ${({ isBudget, isRemaining }) =>
    isBudget
      ? "rgb(124, 198, 254)"
      : isRemaining
      ? "rgb(204, 213, 255)"
      : "rgb(231, 187, 227)"};

  border-radius: 10px;
`;
