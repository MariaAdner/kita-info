import styled, { css } from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 50px;
  padding-left: 50px;
  padding-right: 50px;

  ${(props) =>
    props.$variant === "color" &&
    css`
      background-color: white;
    `};

  ${(props) =>
    props.$variant === "blue" &&
    css`
      background-color: var(--color-background1);
    `};
`;

export default Container;
