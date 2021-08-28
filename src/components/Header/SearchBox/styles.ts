import styled from "styled-components";

export const SearchContainer = styled.label`
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
