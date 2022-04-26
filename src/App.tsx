import styled from "styled-components";
import { Card } from "./components/Card/Card";
import { Container } from "./components/Container/StyledContainer";
import { Title } from "./components/Title/Title";
import { CardButton } from "./components/CardButton/CardButton";
import { CustomSelect } from "./components/CustomSelect/Select";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { List } from "./components/List/List";
import { ListItem } from "./components/ListItem/ListItem";

function App() {
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
        <List>
          <ListItem>shoping</ListItem>
          <ListItem>drinking</ListItem>
          <ListItem>relax</ListItem>
          <ListItem>study</ListItem>
        </List>
      </Container>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: grid;
  margin-top: 30px;
  gap: 30px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default App;
