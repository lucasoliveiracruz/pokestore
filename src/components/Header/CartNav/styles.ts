import styled from "styled-components";

export const Container = styled.button`
  position: relative;
  margin: 0 6px;
  background-color: transparent;
  border: 0;

  span {
    position: absolute;
    background-color: ${({ theme }) => theme.color.white};
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -4px;
    right: -4px;
    border-radius: 50%;
    font-size: 12px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.primary};
  }
`;
