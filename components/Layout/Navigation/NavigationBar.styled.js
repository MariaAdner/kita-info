import styled from "styled-components";
import Link from "next/link";

export const StyledNavigation = styled.div`
  width: 100%;
  background-color: var(--color-main);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const StyledNavigationLink = styled(Link)`
  padding: 12px;
  font-size: 20px;
`;

export const StyledNavigationButton = styled.button`
  background-color: var(--color-main);
  color: white;
  border: none;
  font-size: 18px;
  font-weight: 700;
  &:hover {
    background-color: var(--color-headline);
  }
`;
