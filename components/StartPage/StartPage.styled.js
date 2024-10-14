import styled from "styled-components";
import Link from "next/link";

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MenuLink = styled.li`
  width: 200px;
  height: 50px;
  border: 2px, solid, var(--color-main);
  border-radius: 20px;
  margin: 10px;
  list-style: none;
  padding: 25px;
  text-align: center;
  background-color: var(--color-background);
  color: var(--color-headline);
  font-weight: bold;
  font-size: larger;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
