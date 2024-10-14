import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --color-main: #2d89ef;
  --color-text: #4d4d4d;
  --color-background: #eff4ff;
  --color-headline: #2b5797;
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
