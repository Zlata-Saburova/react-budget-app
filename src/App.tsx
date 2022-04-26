import styled from "styled-components";
import { Card } from "./components/Card/Card";
import { Container } from "./components/Container/StyledContainer";
import { StyledTitle } from "./components/Title/StyledTitle";
import { CardButton } from "./components/CardButton/CardButton";
import { CustomSelect } from "./components/CustomSelect/Select";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { List } from "./components/List/List";
import { ListItem } from "./components/ListItem/ListItem";
import { Badge } from "./components/Badge/Badge";
import { Cross } from "./components/Cross/Cross";
import { Form } from "./components/Form/Form";
import { Input } from "./components/Input/Input";
import { FormButton } from "./components/FormButton/FormButton";

const App = () => {
  return (
    <StyledApp>
      <Container>
        <TitleContainer>
          <StyledTitle>Budget App</StyledTitle>
          <CustomSelect />
        </TitleContainer>
        <Card type="budget">
          Budget: $3000 <CardButton>Edit</CardButton>
        </Card>
        <Card type="remaining">Remaining: $2000</Card>
        <Card type="spent">Spent so far: $1000</Card>
      </Container>
      <Container>
        <StyledTitle>Expenses</StyledTitle>
        <SearchInput />
        <List>
          <ListItem>
            shoping <Badge>$100</Badge> <Cross />
          </ListItem>
          <ListItem>
            drinking <Badge>$200</Badge> <Cross />
          </ListItem>
          <ListItem>
            relax <Badge>$500</Badge> <Cross />
          </ListItem>
          <ListItem>
            study <Badge>$400</Badge> <Cross />
          </ListItem>
        </List>
      </Container>
      <Container>
        <StyledTitle>Add Expense</StyledTitle>
        <Form>
          <Input name="name" type="text" />
          <Input name="cost" type="number" />
          <FormButton>Done</FormButton>
        </Form>
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
