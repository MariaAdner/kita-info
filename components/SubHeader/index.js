import styled, { css } from "styled-components";

const SubHead = styled.h2`
  margin-top: 30px;

  ${(props) =>
    props.$variant === "blue" &&
    css`
      color: var(--color-headline);
      display: flex;
      align-items: flex-start;
    `};

  ${(props) =>
    props.$variant === "white" &&
    css`
      color: white;
      display; flex;
      align-items: flex-end;
    `};

  ${(props) =>
    props.$variant === "menu" &&
    css`
      color: var(--color-headline);
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
    `};
`;

export default function SubHeader({ children, $variant }) {
  return <SubHead $variant={$variant}>{children}</SubHead>;
}
