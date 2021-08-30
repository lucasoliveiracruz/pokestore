import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #F4EDE8;
    color: #333333;
    -webkit-font-smoothing: antialiased;
  }
  body, button, input {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  
  .cart-modal-overlay {
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
  }

  .cart-modal-content {
    background-color: #fff;
    width: 100%;
    max-width: 576px;
    position: relative;
    border-radius: 0.25rem;
    padding: 12px;

    @media(max-width: 700px) {
      padding: 0px;
      max-width: 100%;
    }
  }

  .cart-modal-close {
    position: absolute;
    right:1.5rem;
    top: 1.5rem;
    border: 0;
    background-color: transparent;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
