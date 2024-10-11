import styled from "styled-components";
import Link from "next/link";

export const NewsLink = styled(Link)`
  width: 300px;
  height: 50px;
  border: 2px, solid, darkblue;
  border-radius: 10px;
  margin: 10px;
  list-style: none;
  padding: 25px;
  text-align: center;
  background-color: lightblue;
  color: darkblue;
  font-weight: bold;
  font-size: larger;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
