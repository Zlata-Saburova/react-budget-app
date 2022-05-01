import styled from "styled-components";
import { Card } from "./components/Card/Card";
import { Container } from "./components/Container/StyledContainer";
import { EditButton } from "./components/EditButton/EditButton";
import { CustomSelect } from "./components/CustomSelect/Select";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { List } from "./components/List/List";
import { Form } from "./components/Form/Form";
import { Title } from "./components/Title/Title";
import { ChangeEvent, useEffect, useState } from "react";
import { CardInput } from "./components/CardInput/CardInput";
import { useBudgetContext } from "./context/BudgetContext/BudgetContext";
import { SaveButton } from "./components/SaveButton/SaveButton";
import { useExpensesContext } from "./context/ExpensesContext/ExpensesContext";

const App = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleEditButton = () => {
    setIsEdit(!isEdit);
  };

  const [inputValue, setInputValue] = useState<number>(0);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(+e.target.value);
  };

  const { budget, setBudget } = useBudgetContext();

  const handleSaveButton = () => {
    setIsEdit(!isEdit);
    setBudget(inputValue);
  };

  const { expenses } = useExpensesContext();

  const [spent, setSpent] = useState<number>(0);

  const [remaining, setRemaining] = useState<number>(0);

  const [overspent, setOverspent] = useState<number>(0);

  useEffect(() => {
    const sum = expenses.reduce((acc, buy) => acc + buy.cost, 0);
    setSpent(sum);
    setRemaining(budget - sum);

    if (sum > budget) {
      setOverspent(sum - budget);
    }
  }, [budget, expenses]);

  const [type, setType] = useState<string>("remaining");

  useEffect(() => {
    if (spent > budget) {
      setType("overspending");
    } else {
      setType("remaining");
    }
  }, [spent, budget]);

  return (
    <StyledApp>
      <Container>
        <TitleContainer>
          <Title>Budget App</Title>
          <CustomSelect />
        </TitleContainer>
        <Card isEdit type="budget">
          {isEdit ? (
            <CardInput handleInput={handleInput} />
          ) : (
            `Budget: $${budget}`
          )}
          {isEdit ? (
            <SaveButton handleSaveButton={handleSaveButton}>Save</SaveButton>
          ) : (
            <EditButton handleEditButton={handleEditButton}>Edit</EditButton>
          )}
        </Card>
        <Card type={type}>
          {type === "remaining"
            ? `Remaining: $${remaining}`
            : `Overspending by $${overspent}`}
        </Card>
        <Card type="spent">Spent so far: ${spent}</Card>
      </Container>
      <Container>
        <Title>Expenses</Title>
        <SearchInput />
        <List></List>
      </Container>
      <Container>
        <Title>Add Expense</Title>
        <Form></Form>
      </Container>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  display: grid;
  gap: 30px;

  margin-top: 30px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default App;
