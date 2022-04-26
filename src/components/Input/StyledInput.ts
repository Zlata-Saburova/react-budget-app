import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  padding: 16px 20px;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: rgb(0, 0, 0);

  background: rgb(255, 255, 255);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #999999;
  }
`;
