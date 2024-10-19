import styled from "styled-components";
import Link from "next/link";

export const StyledList = styled.ul`
  list-style: none;
  margin-bottom: 100px;
  padding-left: 0;
`;

export const EventsLink = styled(Link)`
  width: 300px;
  height: 50px;
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
  text-decoration: none;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
`;

export const StyledDate = styled.div`
  text-decoration: underline;
  padding: 5px;
`;

export const StyledTitle = styled.div`
  font-weight: bold;
`;
