import styled from "styled-components";

export const StyledTable = styled.table`
  background-color: white;
  // border: thin solid #666;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  margin: 5px;
  width: 300px;
  display: flex;
  align-items: center;
  font-size: 11pt;

  @media (min-width: 450px) {
    width: 700px;
    padding: 20px;
  }
`;

export const StyledColumn = styled.td`
  padding: 5px;
`;
