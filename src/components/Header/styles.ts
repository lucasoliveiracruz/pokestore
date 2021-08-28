import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
`;

export const Content = styled.div`
  max-width: 1480px;
  padding: 60px;
  display: flex;

  margin: 0 auto;

  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
