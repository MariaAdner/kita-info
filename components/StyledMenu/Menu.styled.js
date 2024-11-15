import styled from "styled-components";
import Link from "next/link";

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 70px;
`;

export const MenuLink = styled.li`
  width: 150px;
  height: 180px;
  border-radius: 5px;
  margin: 10px;
  list-style: none;
  padding: 25px;
  text-align: center;
  background-color: white;
  color: var(--color-headline);
  font-weight: bold;
  font-size: larger;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  @media (min-width: 400px) {
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
