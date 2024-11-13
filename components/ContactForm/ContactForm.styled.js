import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
  @media (min-width: 400px) {
    margin-left: 100px;
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
  @media (min-width: 400px) {
    width: 500px;
  }
`;

export const StyledInputField = styled.input`
  padding: 5px;
`;

export const StyledInputCheck = styled.div`
  width: 500px;
`;
