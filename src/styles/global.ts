import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  body, #root {
    width: 100%;
    min-height: 100vh;
  }

  #root {
    padding: 0 12px;
  }
`;