import styled from "styled-components";
import Link from "next/link";

export const StyledList = styled.ul`
  list-style: none;
`;

export const NewsLink = styled(Link)`
  width: 300px;
  height: 100px;
  border-radius: 5px;
  margin: 10px;
  list-style: none;
  padding: 25px;
  text-align: center;
  background-color: var(--color-background);
  color: darkblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-decoration: none;
`;

export const StyledDate = styled.div`
  text-decoration: underline;
  padding: 5px;
`;

export const StyledTitle = styled.div`
  font-weight: bold;
  padding: 10px;
`;
