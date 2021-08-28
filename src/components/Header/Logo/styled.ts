import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100px;

  h1 {
    font-weight: bold;
    color: ${({ theme }) => theme.color.white};
  }
`;
