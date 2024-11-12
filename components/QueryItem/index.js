import { useRouter } from "next/router";
import useSWR from "swr";
import { Card, CardTitle, CardText } from "../Card/Card.styled";

export default function QueryItem() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/querys/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <Card $variant="green">
        <CardTitle>{data.title}</CardTitle>
        <CardText dangerouslySetInnerHTML={{ __html: data.text }}></CardText>
        {data.query !== " " && (
          <CardText>
            Sie haben sich bereits für <strong>{data.answer} </strong>
            entschieden.
          </CardText>
        )}
      </Card>
    </>
  );
}
