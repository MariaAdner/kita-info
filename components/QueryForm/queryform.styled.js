import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 3rem auto;
  width: 95%;
  max-width: 25rem;
  border-radius: 6px;
  background-color: var(--color-background-text);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  text-align: center;
`;

export const StyledRadioButtonMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
`;

export const StyledRadioButton = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: row;
  padding: 10px;
`;
