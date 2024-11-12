import styled, { css } from "styled-components";

export const Headline = styled.h4`
  color: var(--color-headline);
`;

export const Card = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 50px;
  width: 300px;

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
  margin: 10px;
  text-align: center;
`;

export const CardDate = styled.p`
  margin: 10px;
  font-style: italic;
  font-weight: lighter;
`;

export const CardText = styled.p`
  margin: 10px;
  text-align: left;
`;
