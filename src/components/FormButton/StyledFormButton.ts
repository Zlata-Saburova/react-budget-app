import styled from "styled-components";

export const StyledFormButton = styled.button`
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  margin-bottom: 50px;

  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: rgb(255, 255, 255);

  background-color: rgb(35, 201, 255);
  border-radius: 10px;

  transition: box-shadow 0.4s, background-color 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 15px rgba(33, 28, 28, 32%);
  }

  &:active {
    background-color: rgb(26 184 236);
  }
`;
