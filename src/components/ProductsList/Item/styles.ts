import styled from "styled-components";

interface ItemProps {
  available: boolean;
}

export const Container = styled.div<ItemProps>`
  background: #fff;
  border-radius: 8px;

  min-width: 320px;
  max-width: 320px;
  transition: box-shadow 0.2s;
  box-shadow: 1px 2px 8px 2px ${({ theme }) => theme.color.gray_light};

  &:hover {
    box-shadow: 1px 2px 8px 2px ${({ theme }) => theme.color.primary};
    cursor: pointer;
  }

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
      transition: all 0.2s;

      svg {
        color: ${({ theme }) => theme.color.gray_dark};
      }
      & + button {
        margin-left: 6px;
      }

      &:hover {
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.95);
      }
    }
  }

  @media (max-width: 700px) {
    min-width: 250px;
    max-width: 250px;

    header {
      height: 124px;
      padding: 0;
    }

    section.body {
      padding: 18px;
      h2 {
        font-size: 18px;
      }
      .price {
        font-size: 20px;
      }
    }

    section.footer {
      padding: 12px 18px;
      button {
        padding: 4px;
        svg {
          font-size: 10px;
        }
      }
      span {
        font-size: 16px;
      }
    }
  }
`;
