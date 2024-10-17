import styled from "styled-components";

const SubHead = styled.h2`
  color: var(--color-headline);
  margin-top: 30px;
  text-align: center;
`;

export default function SubHeader(props) {
  return <SubHead>{props.children}</SubHead>;
}
