import styled from "styled-components";
import { Card } from "./components/Card/Card";
import { Container } from "./components/Container/ContainerStyle";
import { Title } from "./components/Title/Title";

function App() {
  return (
    <StyledApp>
      <Container>
        <Title>Budget App</Title>
        <Card type="budget">Budget: $3000</Card>
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

export default App;
