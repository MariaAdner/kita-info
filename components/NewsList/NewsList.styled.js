import styled from "styled-components";
import Link from "next/link";

export const StyledList = styled.ul`
  list-style: none;
`;

export const NewsLink = styled(Link)`
  width: 300px;
  height: 100px;
  border-radius: 10px;
  row-gap: 10px;
  list-style: none;
  text-align: center;
  background-color: var(--color-background);
  color: darkblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  margin: 10px;
`;

export const StyledDate = styled.div`
  align-self: flex-start;
`;

export const StyledTitle = styled.div`
  font-weight: bold;
  padding: 5px;
`;
