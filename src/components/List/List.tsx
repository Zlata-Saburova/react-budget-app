import styled from "styled-components";
import { IExpenses } from "../../context/ExpensesContext/types";
import { ListItem } from "../ListItem/ListItem";
import { StyledList } from "./styles";

interface IProps {
  findedExpenses: IExpenses[];
}

export const List = ({ findedExpenses }: IProps) => {
  return (
    <StyledList>
      {findedExpenses.length ? (
        findedExpenses.map((buy) => {
          return <ListItem key={buy.id} buy={buy}></ListItem>;
        })
      ) : (
        <StyledEmpty>Oooops 🙈</StyledEmpty>
      )}
    </StyledList>
  );
};

const StyledEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: rgb(0, 0, 0);
`;
