import styled, { css } from "styled-components";

interface ContainerProps {
  isVisible?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: visible;

  ${({ isVisible }) =>
    !isVisible &&
    css`
      display: none;
      visibility: hidden;
    `}
`;
