import styled from "styled-components";

export const StyledCross = styled.div`
  position: relative;
  height: 20px;
  width: 20px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 10px;

    width: 2px;
    height: 20px;

    background-color: rgb(200, 132, 166);
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(135deg);
  }
`;