import styled from "styled-components";

export const StyledSaveButton = styled.button`
  min-width: 85px;
  margin-right: 20px;
  text-align: center;
  padding-top: 6px;
  padding-bottom: 6px;

  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  border-radius: 10px;
  background-color: rgb(255, 255, 255);

  cursor: pointer;

  transition: box-shadow 0.4s, background-color 0.3s;
  &:hover {
    box-shadow: 2px 2px 15px rgba(33, 28, 28, 32%);
  }

  &:active {
    background-color: rgb(245 242 242);
  }
`;
