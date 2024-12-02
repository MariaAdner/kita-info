import { useRouter } from "next/router";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { Card, CardTitle, CardText } from "../Card/Card.styled";

export default function SurveyItem() {
  const router = useRouter();
  const { id } = router.query;

  const { data: session } = useSession();
  // const userId = session.user.id;

  const { data: survey, isLoading } = useSWR(`/api/survey/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!survey) {
    return;
  }

  return (
    <>
      <Card $variant="green">
        <CardTitle>{survey.title}</CardTitle>
        <CardText dangerouslySetInnerHTML={{ __html: survey.text }}></CardText>
        {survey.answer !== " " && (
          <CardText>
            Sie haben sich bereits für <strong>{survey.answer} </strong>
            entschieden.
          </CardText>
        )}
      </Card>
    </>
  );
}
