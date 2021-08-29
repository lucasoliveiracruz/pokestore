import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;

  max-width: 1480px;
  margin-top: 24px;
  padding-bottom: 42px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 24px;
  }
`;
