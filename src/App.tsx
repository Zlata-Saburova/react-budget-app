import styled from "styled-components";
import { Card } from "./components/Card/Card";
import { Container } from "./components/Container/StyledContainer";
import { Title } from "./components/Title/Title";
import { CardButton } from "./components/CardButton/CardButton";
import { CustomSelect } from "./components/CustomSelect/Select";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { List } from "./components/List/List";
import { ListItem } from "./components/ListItem/ListItem";
import { Badge } from "./components/Badge/Badge";

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
          <ListItem>
            shoping <Badge>$100</Badge>
          </ListItem>
          <ListItem>
            drinking <Badge>$200</Badge>
          </ListItem>
          <ListItem>
            relax <Badge>$500</Badge>
          </ListItem>
          <ListItem>
            study <Badge>$400</Badge>
          </ListItem>
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
