import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 30px;

  min-width: 320px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    max-width: 500px;
  }

  @media (min-width: 1024px) {
    max-width: 700px;
  }
`;
