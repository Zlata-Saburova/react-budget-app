import styled from "styled-components";

interface IProps {
  type: string;
}
export const StyledCard = styled.div<IProps>`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding-top: 36px;
  padding-bottom: 40px;
  padding-left: 20px;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  ${({ type }) => {
    switch (type) {
      case "budget":
        return `background-color: rgb(124, 198, 254)`;
      case "remaining":
        return `background-color: rgb(204, 213, 255)`;
      case "overspending":
        return `background-color: rgb(255, 0, 0); 
        color: rgb(255, 255, 255)`;
      default:
        return `background-color: rgb(231, 187, 227)`;
    }
  }};

  border-radius: 10px;
`;
