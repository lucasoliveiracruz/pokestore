import styled, { css } from "styled-components";

interface ContainerProps {
  isFirstItem: boolean;
  isLastItem: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  border-color: ${({ theme }) => theme.color.gray_light};
  border-width: 1px;
  border-style: solid;
  padding: 12px;
  flex: 1;

  ${({ isFirstItem }) =>
    isFirstItem &&
    css`
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
    `};
  ${({ isLastItem }) =>
    isLastItem &&
    css`
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
    `};

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
    margin-left: 24px;

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

  .remove-button {
    padding: 8px;
    border-radius: 8px;
    display: flex;
    border: none;
    transition: 0.1s;
    margin-left: 16px;

    svg {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;
