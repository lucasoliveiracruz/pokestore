import styled from "styled-components";

export const ModalBody = styled.div`
  border: 1px solid ${({ theme }) => theme.color.gray_light};
  padding: 24px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  flex: 1;
  overflow-y: scroll;

  h2 {
    margin-bottom: 24px;
  }
`;

export const ModalFooter = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background: ${({ theme }) => theme.color.primary};
  width: 100%;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;

  span {
    color: ${({ theme }) => theme.color.white};
    font-size: 20px;
    font-weight: bold;
  }

  button {
    background: ${({ theme }) => theme.color.white};
    padding: 12px;
    border-radius: 8px;
    display: flex;
    border: none;
    transition: 0.1s;
    color: ${({ theme }) => theme.color.primary};
    font-size: 18px;
    transition: transform 0.2s;

    svg {
      color: ${({ theme }) => theme.color.primary};
      margin-left: 8px;
    }

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;
