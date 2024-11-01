import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import {
  StyledAuthForm,
  StyledAuthField,
  StyledAuthInput,
  StyledAuthLabel,
  StyledError,
} from "./AuthForm.styled";
import { StyledButton } from "../Button/Button.styled";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  async function submitHandler(event) {
    event.preventDefault();

    try {
      const result = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });

      if (result.error) {
        setError("Ungültige Anmeldedaten");
        return;
      } else router.replace("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <StyledAuthForm onSubmit={submitHandler}>
        <StyledAuthField>
          <StyledAuthLabel htmlFor="email">E-Mail:</StyledAuthLabel>
          <StyledAuthInput
            type="email"
            id="email"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </StyledAuthField>
        <StyledAuthField>
          <StyledAuthLabel htmlFor="password">Passwort:</StyledAuthLabel>
          <StyledAuthInput
            type="password"
            id="password"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </StyledAuthField>
        <div>
          <StyledButton>Login</StyledButton>
        </div>
        {error && <StyledError>{error}</StyledError>}
      </StyledAuthForm>
    </section>
  );
}
