import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  width: 100px;
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

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
