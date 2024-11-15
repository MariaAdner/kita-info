import styled from "styled-components";

const MenuHeadlineStyled = styled.h4`
  color: var(--color-headline);

  @media (min-width: 400px) {
  }
`;

export default function MenuHeadline({ children }) {
  return <MenuHeadlineStyled>{children}</MenuHeadlineStyled>;
}
