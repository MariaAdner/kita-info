import styled, { css } from "styled-components";

export const Card = styled.ul`
  list-style: none;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-bottom: 50px;

  ${(props) =>
    props.$variant === "yellow" &&
    css`
      background-color: var(--color-background-item);
    `};

  ${(props) =>
    props.$variant === "green" &&
    css`
      background-color: var(--color-background-item1);
    `};
`;

export const CardTitle = styled.h3`
  text-align: center;
`;

export const Headline = styled.h4`
  color: var(--color-headline);
`;