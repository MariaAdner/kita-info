import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --color-main: #2d89ef;
  --color-text: #4d4d4d;
  --color-background: #eff4ff;
  --color-background-item: #ffecb3;
  --color-headline: #2b5797;
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: auto;
    place-items: center;
    font-family: system-ui;
  }
`;
