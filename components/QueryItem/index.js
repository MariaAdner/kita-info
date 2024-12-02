import { useRouter } from "next/router";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { Card, CardTitle, CardText } from "../Card/Card.styled";

export default function QueryItem() {
  const router = useRouter();
  const { id } = router.query;

  const { data: session } = useSession();
  // const userId = session.user.id;

  const { data: query, isLoading } = useSWR(`/api/query/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!query) {
    return;
  }

  return (
    <>
      <Card $variant="green">
        <CardTitle>{query.title}</CardTitle>
        <CardText dangerouslySetInnerHTML={{ __html: query.text }}></CardText>
        {query.query !== " " && (
          <CardText>
            Sie haben sich bereits für <strong>{query.answer} </strong>
            entschieden.
          </CardText>
        )}
      </Card>
    </>
  );
}
