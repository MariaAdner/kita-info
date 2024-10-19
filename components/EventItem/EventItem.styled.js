import styled from "styled-components";

export const StyledEventItem = styled.div`
  margin-top: 20px;
  background-color: var(--color-background-item);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  margin: 50px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
`;

export const StyledTitle = styled.h4`
  margin: 10px;
`;

export const StyledDate = styled.p`
  margin: 10px;
  font-style: italic;
  font-weight: lighter;
`;

export const StyledDescription = styled.p`
  margin: 10px;
`;
