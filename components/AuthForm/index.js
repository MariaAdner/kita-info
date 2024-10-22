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
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        name,
        password,
        redirect: false,
      });

      console.log(password);

      if (res?.error) {
        setError("Invalid Credentials");
        return;
      }

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledAuthForm onSubmit={handleSubmit}>
      <StyledAuthField>
        <StyledAuthLabel htmlFor="name">Benutzer:</StyledAuthLabel>
        <StyledAuthInput
          type="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
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
      <LoginButton />
      {error && <div>{error}</div>}
    </StyledAuthForm>
  );
}
