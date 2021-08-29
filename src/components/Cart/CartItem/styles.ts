import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  border-color: ${({ theme }) => theme.color.gray_light};
  border-width: 1px;
  border-style: solid;
  padding: 12px;
  flex: 1;

  & + & {
    border-top-width: 0px;
  }

  .item-info {
    display: flex;
    flex-direction: column;
    flex: 1;

    .price {
      font-style: normal;
      font-size: 24px;
      line-height: 34px;
      color: ${({ theme }) => theme.color.primary};
      b {
        font-weight: 600;
      }
    }
  }

  .item-actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      padding: 8px;
      border-radius: 8px;
      display: flex;
      border: none;
      transition: 0.1s;

      svg {
        color: ${({ theme }) => theme.color.primary};
      }

      & + button {
        margin-top: 6px;
      }
    }
  }
`;
