import styled, { css } from "styled-components";

const HeadlineStyled = styled.h4`
  color: var(--color-headline);
  padding-left: 50px;
  @media (min-width: 450px) {
    padding-left: 200px;
  }
  @media (min-width: 1200px) {
    padding-left: 300px;
  }

  ${(props) =>
    props.$variant === "blue" &&
    css`
      background-color: var(--color-background1);
      color: white;
      padding-left: 0px;
      @media (min-width: 450px) {
        padding-left: 0px;
      }
      @media (min-width: 1200px) {
        padding-left: 0px;
      }
    `};
`;

export default function Headline({ children, $variant }) {
  return <HeadlineStyled $variant={$variant}>{children}</HeadlineStyled>;
}
