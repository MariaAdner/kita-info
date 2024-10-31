import { useSession } from "next-auth/react";

export default function ProfileOverview() {
  const { data: session } = useSession();

  if (session)
    return (
      <div>
        <h4> Hallo, lieber {session.user.name}</h4>
      </div>
    );
}
