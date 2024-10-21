import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button type="button" onClick={() => signOut()}>
          Logout
        </button>
      </>
    );
  } else {
    return (
      <>
        <button type="button" onClick={() => signIn()}>
          Login
        </button>
      </>
    );
  }
}
