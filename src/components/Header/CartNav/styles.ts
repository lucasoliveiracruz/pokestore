import styled from "styled-components";

export const NavContainer = styled.nav`
  margin: 0 6px;
  padding-right: 1px 6px 1px 0;
  color: ${({ theme }) => theme.color.gray_dark};

  border-right-width: 1px;
  border-color: ${({ theme }) => theme.color.gray_light};

  & > * {
    margin: 0 4px;
  }
`;
