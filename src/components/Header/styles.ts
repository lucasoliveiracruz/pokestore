import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  max-width: 1480px;
  margin: 0 auto;

  padding: 60px;

  align-items: center;
  background-color: ${({ theme }) => theme.color.primary};
  justify-content: center;
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
