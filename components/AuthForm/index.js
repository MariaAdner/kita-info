"use client";
import LoginButton from "./LoginButton";
import {
  StyledAuthForm,
  StyledAuthField,
  StyledAuthLabel,
  StyledAuthInput,
} from "./AuthForm.styled";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Authform() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    signIn("credentials", { username, password, redirect: false }).then(
      async (e) => {
        if (e.error) {
          setError("Invalid email/password");
        } else {
          router.push("/");
        }
      }
    );
  };

  return (
    <StyledAuthForm onSubmit={handleSubmit}>
      <StyledAuthField>
        <StyledAuthLabel htmlFor="name">Benutzer:</StyledAuthLabel>
        <StyledAuthInput
          type="name"
          id="name"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </StyledAuthField>
      <StyledAuthField>
        <StyledAuthLabel htmlFor="password">Passwort:</StyledAuthLabel>
        <StyledAuthInput
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </StyledAuthField>
      <div>
        <button>Login</button>
      </div>
      {error && <div>{error}</div>}
    </StyledAuthForm>
  );
}
