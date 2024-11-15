import styled, { css } from "styled-components";
import Link from "next/link";

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 0;
  margin-bottom: 70px;
`;

export const StyledLink = styled(Link)`
  width: 300px;
  height: 100px;
  border-radius: 10px;
  list-style: none;
  text-align: center;
  background-color: var(--color-background-list1);
  color: darkblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  margin: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
`;

export const StyledItem = styled.li``;

export const StyledDate = styled.div`
  align-self: flex-start;

  ${(props) =>
    props.$variant === "termine" &&
    css`
      align-self: center;
    `};
`;

export const StyledTitle = styled.p`
  font-weight: bold;
`;
