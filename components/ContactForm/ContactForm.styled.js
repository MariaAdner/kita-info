import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (min-width: 400px) {
    margin-left: 100px;
    margin-top: 70px;
  }
`;

export const StyledLabel = styled.label`
  font-size: 10pt;
  padding: 10px;
  width: 500px;
`;

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
  @media (min-width: 400px) {
    width: 500px;
  }
`;

export const StyledInputField = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid white;
  font: inherit;
`;

export const StyledTextarea = styled.textarea`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid white;
  font: inherit;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
