import styled, { css } from "styled-components";

interface IFoodPlateProps {
  available: boolean;
}

export const Container = styled.div<IFoodPlateProps>`
  background: ${({ theme }) => theme.color.shape};
  border-radius: 8px;

  header {
    background: ${({ theme }) => theme.color.gray_light};
    border-radius: 8px 8px 0px 0px;
    height: 192px;
    overflow: hidden;
    transition: 0.3s opacity;
    text-align: center;

    ${(props) =>
      !props.available &&
      css`
        opacity: 0.3;
      `};

    img {
      pointer-events: none;
      user-select: none;
      object-fit: cover;
      width: 100%;
    }
  }

  section.body {
    padding: 30px;
    h2 {
      color: ${({ theme }) => theme.color.gray_dark};
    }
    p {
      color: ${({ theme }) => theme.color.gray_dark};
      margin-top: 16px;
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
    background: ${({ theme }) => theme.color.gray_light};
    border-radius: 0px 0px 8px 8px;

    width: 100%;

    button {
      background: ${({ theme }) => theme.color.white};
      padding: 10px;
      border-radius: 8px;
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
