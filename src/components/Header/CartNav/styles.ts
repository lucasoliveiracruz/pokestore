import styled from "styled-components";

export const NavContainer = styled.nav`
  position: relative;
  margin: 0 6px;
  padding-right: 1px 6px 1px 0;
  color: ${({ theme }) => theme.color.gray_dark};

  border-right-width: 1px;
  border-color: ${({ theme }) => theme.color.gray_light};

  & > * {
    margin: 0 4px;
  }

  span {
    position: absolute;
    background-color: ${({ theme }) => theme.color.white};
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -4px;
    right: -4px;
    border-radius: 50%;
    font-size: 12px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.primary};
  }
`;
