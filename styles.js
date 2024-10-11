import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --color-main: #3399ff;
  --color-text: #4d4d4d;
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
