import styled, { css } from "styled-components";

const SubHead = styled.h2`
  color: var(--color-headline);
  margin-top: 30px;
  text-align: center;

  ${(props) =>
    props.$variant === "white" &&
    css`
      color: white;
    `};
`;

export default function SubHeader(props) {
  return <SubHead>{props.children}</SubHead>;
}
