import Authform from "@/components/AuthForm";
import LoginButton from "@/components/AuthForm/LoginButton";
import SubHeader from "@/components/SubHeader";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <>
      <div>
        <SubHeader>Login </SubHeader>
        {session ? (
          <button onClick={() => signOut()}>Log out</button>
        ) : (
          <button type="button" onClick={() => signIn()}>
            Login
          </button>
        )}
      </div>
      <Authform />
    </>
  );
}
