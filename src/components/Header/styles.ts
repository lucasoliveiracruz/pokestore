import styled, { css } from "styled-components";

interface ContainerProps {
  scrollOffset: number;
}

export const Container = styled.header<ContainerProps>`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  position: sticky;
  top: 0;
  overflow: hidden;

  > div {
    max-width: 1480px;
    display: flex;
    flex-direction: column;

    margin: 0 auto;

    align-items: center;
    justify-content: center;
    flex: 1;

    padding: ${({ scrollOffset }) => 60 - scrollOffset / 10}px;
    @media (max-width: 700px) {
      padding: 24px 12px;
    }
  }
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const InlineContent = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
`;
