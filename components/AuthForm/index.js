import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import {
  StyledAuthForm,
  StyledAuthField,
  StyledAuthInput,
  StyledAuthLabel,
} from "./AuthForm.styled";

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
        setError("Invalid Credentials");
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
          <StyledAuthLabel htmlFor="password">Passwort</StyledAuthLabel>
          <StyledAuthInput
            type="password"
            id="password"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </StyledAuthField>
        <div>
          <button>Login</button>
        </div>
        {error && <div>{error}</div>}
      </StyledAuthForm>
    </section>
  );
}
