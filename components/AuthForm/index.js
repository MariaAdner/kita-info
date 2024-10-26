import { useState, useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import {
  StyledAuthForm,
  StyledAuthField,
  StyledAuthInput,
  StyledAuthLabel,
} from "./AuthForm.styled";

async function createUser(name, email, password) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

export default function AuthForm() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
      });

      if (!result.error) {
        router.replace("/");
      }
    } else {
      try {
        const result = await createUser(
          enteredName,
          enteredEmail,
          enteredPassword
        );
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section>
      <StyledAuthForm onSubmit={submitHandler}>
        <StyledAuthField>
          <StyledAuthLabel htmlFor="name">Benutzer:</StyledAuthLabel>
          <StyledAuthInput type="name" id="name" required ref={nameInputRef} />
        </StyledAuthField>
        <StyledAuthField>
          <StyledAuthLabel htmlFor="email">E-Mail:</StyledAuthLabel>
          <StyledAuthInput
            type="email"
            id="email"
            required
            ref={emailInputRef}
          />
        </StyledAuthField>
        <StyledAuthField>
          <StyledAuthLabel htmlFor="password">Passwort</StyledAuthLabel>
          <StyledAuthInput
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </StyledAuthField>
        <div>
          <button>{isLogin ? "Login" : "Registrieren"}</button>
          <button type="button" onClick={switchAuthModeHandler}>
            {isLogin ? "Neues Konto anlegen" : "Login mit Konto"}
          </button>
        </div>
      </StyledAuthForm>
    </section>
  );
}
