import styled from "styled-components";
import Link from "next/link";

export const StyledNavigation = styled.div`
  width: 100%;
  background-color: var(--color-main);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const StyledNavigationLink = styled(Link)`
  padding: 12px;
  font-size: 17px;
`;

export const StyledNavigationButton = styled.button`
  background-color: var(--color-main);
  color: white;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
`;
