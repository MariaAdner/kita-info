import styled, { css } from "styled-components";

const SubHead = styled.h2`
  margin-top: 30px;

  ${(props) =>
    props.$variant === "blue" &&
    css`
      color: var(--color-headline);
    `};

  ${(props) =>
    props.$variant === "white" &&
    css`
      color: white;
      align-items: flex-end;
    `};
`;

export default function SubHeader(props) {
  return <SubHead>{props.children}</SubHead>;
}
