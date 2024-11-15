import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background-color: var(--color-main);
  color: white;
  border-color: var(--color-main);
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  border: none;
  padding: 10px;

  ${(props) =>
    props.$variant === "white" &&
    css`
      background-color: var(--color-background);
      color: var(--color-text);
    `};
`;
