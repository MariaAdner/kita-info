import styled from "styled-components";
import Link from "next/link";

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 0;
`;

export const MenuLink = styled.li`
  width: 200px;
  height: 50px;
  border: 5px, solid, var(--color-main);
  border-radius: 30px;
  margin: 10px;
  list-style: none;
  padding: 25px;
  text-align: center;
  background-color: var(--color-background);
  color: var(--color-headline);
  font-weight: bold;
  font-size: larger;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
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
