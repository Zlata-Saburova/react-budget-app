import styled from "styled-components";
import { Card } from "./components/Card/Card";
import { Container } from "./components/Container/StyledContainer";
import { CardButton } from "./components/CardButton/CardButton";
import { CustomSelect } from "./components/CustomSelect/Select";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { List } from "./components/List/List";
import { Form } from "./components/Form/Form";
import { Title } from "./components/Title/Title";

const App = () => {
  return (
    <StyledApp>
      <Container>
        <TitleContainer>
          <Title>Budget App</Title>
          <CustomSelect />
        </TitleContainer>
        <Card type="budget">
          Budget: $3000 <CardButton>Edit</CardButton>
        </Card>
        <Card type="remaining">Remaining: $2000</Card>
        <Card type="spent">Spent so far: $1000</Card>
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
