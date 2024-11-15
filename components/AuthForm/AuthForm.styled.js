import styled from "styled-components";

export const StyledAuthForm = styled.form`
  margin: 3rem auto;
  width: 100%;
  // max-width: 25rem;
  border-radius: 6px;
  background-color: var(--color-background-text);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  text-align: center;
`;

export const StyledAuthField = styled.div`
  margin-bottom: 0.5rem;
`;

export const StyledAuthLabel = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const StyledAuthInput = styled.input`
  font: inherit;
  color: #38015c;
  border-radius: 4px;
  border: 1px solid white;
  width: 100%;
  text-align: left;
  padding: 0.25rem;
`;

export const StyledError = styled.div`
  background-color: red;
  color: white;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
`;
