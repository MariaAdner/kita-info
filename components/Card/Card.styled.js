import styled, { css } from "styled-components";

export const Card = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-top: 50px;
  margin-bottom: 70px;
  width: 100%;
  @media (min-width: 400px) {
    width: 400px;
  }

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

  ${(props) =>
    props.$variant === "white" &&
    css`
      background-color: white;
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

  ${(props) =>
    props.$variant === "event" &&
    css`
      font-weight: bold;
      font-style: normal;
    `};
`;

export const CardText = styled.p`
  margin: 10px;
  text-align: left;
`;
