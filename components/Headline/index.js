import styled, { css } from "styled-components";

const HeadlineStyled = styled.h4`
  color: var(--color-headline);
  padding-left: 50px;
  @media (min-width: 400px) {
    padding-left: 300px;
  }
`;

export default function Headline({ children }) {
  return <HeadlineStyled>{children}</HeadlineStyled>;
}
