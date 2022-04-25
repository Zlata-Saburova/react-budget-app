import styled from "styled-components";
import { Card } from "./components/Card/Card";
import { Container } from "./components/Container/ContainerStyle";
import { Title } from "./components/Title/Title";
import { CardButton } from "./components/CardButton/CardButton";
import { CustomSelect } from "./components/CustomSelect/Select";

function App() {
  return (
    <StyledApp>
      <Container>
        <SelContainer>
          <Title>Budget App</Title>
          <CustomSelect />
        </SelContainer>
        <Card type="budget">
          Budget: $3000 <CardButton>Edit</CardButton>
        </Card>
        <Card type="remaining">Remaining: $2000</Card>
        <Card type="spent">Spent so far: $1000</Card>
      </Container>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const SelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default App;
