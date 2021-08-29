import styled, { css } from "styled-components";

interface SearchContainerProps {
  fullWidth?: boolean;
}

export const SearchContainer = styled.label<SearchContainerProps>`
  display: flex;
  flex: 1;
  padding: 4px 8px;
  margin-left: 60px;
  margin-right: 60px;
  align-self: center;
  position: relative;
  background: ${({ theme }) => theme.color.inputs};
  border-radius: 8px;
  height: 56px;
  align-items: center;
  justify-content: space-between;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
      margin: 0px;
      margin-top: 8px;
      padding: 16px;
    `}
`;

export const SearchInput = styled.input`
  margin-right: 4px;
  padding: 0 4px;
  background: transparent;
  border: 0;
  flex: 1;
  font-size: 20px;

  &::placeholder {
    color: #aaa;
  }
`;
