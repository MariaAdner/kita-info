import useSWR from "swr";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function UserQuery() {
  const { data: session } = useSession();

  //   if (isLoading) {
  //     return <h1>Loading...</h1>;
  //   }

  if (!session) {
    return;
  }

  const userId = session.user.id;

  if (session)
    return (
      <>
        <p>{session.user.name}</p>
        <p> {userId}</p>
        {/* {data.queries.length > 0 && (
        <p> Sie haben Sich bereits für {data.queries.answer} entschieden.</p>
      )} */}
      </>
    );
}
