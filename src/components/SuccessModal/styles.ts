import styled from "styled-components";

export const ModalBody = styled.div`
  padding: 24px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 24px 0;
    text-align: center;
  }

  p {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
    max-width: 80%;
  }

  button {
    padding: 18px 32px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.white};
    border: 0;
    font-weight: bold;
    font-size: 20px;
    margin-top: auto;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;
