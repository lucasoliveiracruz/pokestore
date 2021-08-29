import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100px;

  h1 {
    font-weight: bold;
    font-size: 24px;
    color: ${({ theme }) => theme.color.white};
    display: flex;
    place-content: center;
    margin-bottom: 4px;
  }

  span {
    color: ${({ theme }) => theme.color.white};
  }
`;
