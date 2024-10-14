import styled from "styled-components";

const SubHead = styled.h2`
  padding-left: 50px;
  color: var(--color-headline);
  margin-top: 50px;
`;

export default function SubHeader(props) {
  return <SubHead>{props.children}</SubHead>;
}
