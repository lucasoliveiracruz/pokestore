import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.color.primary};
  padding: 24px;
  border-radius: 8px;
  max-width: 500px;
`;
