import { useSession, signIn, signOut } from "next-auth/react";
import {
  StyledAuthForm,
  StyledAuthField,
  StyledAuthLabel,
  StyledAuthInput,
} from "./AuthForm.styled";

export default function Authform() {
  return (
    <StyledAuthForm>
      <StyledAuthField>
        <StyledAuthLabel htmlFor="name">Benutzer:</StyledAuthLabel>
        <StyledAuthInput type="name" id="name" required />
      </StyledAuthField>
      <StyledAuthField>
        <StyledAuthLabel htmlFor="password">Passwort:</StyledAuthLabel>
        <StyledAuthInput type="password" id="password" required />
      </StyledAuthField>
      <div>
        <button>Login</button>
      </div>
    </StyledAuthForm>
  );
}
