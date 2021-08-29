import styled from "styled-components";

export const ButtonComponent = styled.button`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 42px;
  padding-right: 42px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  background-color: ${({theme}) => theme.color.primary};
  border: 0px;
  color: ${({theme}) => theme.color.white};
  margin: 24px;
`;
