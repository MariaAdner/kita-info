import { useSession, signIn, signOut } from "next-auth/react";

export default function Authform() {
  return (
    <form>
      <div>
        <label htmlFor="name">Benutzername:</label>
        <input type="name" id="name" required />
      </div>
      <div>
        <label htmlFor="password">Passwort:</label>
        <input type="password" id="password" required />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
}
