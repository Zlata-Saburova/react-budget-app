import styled from "styled-components";
import { Container } from "./components/Container/ContainerStyle";
import { Title } from "./components/Title/Title";

function App() {
  return (
    <StyledApp>
      <Container>
        <Title>Budget App</Title>
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
