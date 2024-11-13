import { createGlobalStyle } from "styled-components";
import { Inter } from "next/font/google";

const kitaInfoFont = Inter({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default createGlobalStyle`
:root {
  --color-main: #2d89ef;
  --color-text: #4d4d4d;
  --color-background: #eff4ff;
  --color-background1: #88aadd;
  --color-background-list: #FFF5CC;
  --color-background-item: #ffecb3;
  --color-background-item1: #d3e39c;
  --color-background-text: #afc6e9;
  --color-headline: #2b5797;
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    display: grid;
    place-items: center;
    font-family:  font-family: ${kitaInfoFont.style.fontFamily};
    line-height: 125%;
    background-color: var(--color-background);
    margin:0;
  }
`;
