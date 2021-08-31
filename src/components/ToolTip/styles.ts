import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  > span {
    width: 140px;
    background: #fff;
    padding: 8px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.gray_dark};
    border: 1px solid ${({ theme }) => theme.color.gray_light};
    position: absolute;
    top: calc(100% + 12px);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;

    &::before {
      content: "";
      border-style: solid;
      border-color: #fff transparent;
      border-width: 0px 6px 6px 6px;
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
