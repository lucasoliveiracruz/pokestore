import styled from "styled-components";

interface ItemProps {
  available: boolean;
}

export const Container = styled.div<ItemProps>`
  background: #fff;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.shape};

  width: 320px;

  header {
    border-radius: 8px 8px 0px 0px;
    height: 192px;
    overflow: hidden;
    transition: 0.3s opacity;
    text-align: center;
    padding: 16px 0px;

    img {
      pointer-events: none;
      user-select: none;
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }

  section.body {
    padding: 30px;
    h2 {
      color: ${({ theme }) => theme.color.gray_dark};
    }
    p {
      color: ${({ theme }) => theme.color.gray_dark};
      margin: 4px 0 8px;
    }
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

  section.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    background: ${({ theme }) => theme.color.primary};
    border-radius: 0px 0px 8px 8px;

    width: 100%;

    span {
      color: ${({ theme }) => theme.color.white};
      font-size: 20px;
      font-weight: bold;
    }

    button {
      background: ${({ theme }) => theme.color.white};
      padding: 10px;
      border-radius: 50%;
      display: flex;
      border: none;
      transition: 0.1s;
      svg {
        color: ${({ theme }) => theme.color.gray_dark};
      }
      & + button {
        margin-left: 6px;
      }
    }
  }
`;
