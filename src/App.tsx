import styled from "styled-components";
import { Container } from "./components/Container/StyledContainer";
import { CustomSelect } from "./components/CustomSelect/Select";
import { Form } from "./components/Form/Form";
import { Title } from "./components/Title/Title";
import { CardContainer } from "./components/CardContainer/CardContainer";
import { ListContainer } from "./components/ListContainer/ListContainer";

const App = () => {
  return (
    <StyledApp>
      <Container>
        <TitleContainer>
          <Title>Budget App</Title>
          <CustomSelect />
        </TitleContainer>
        <CardContainer />
      </Container>
      <ListContainer />
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
