import useSWR from "swr";
import { useRouter } from "next/router";
import { Card, CardTitle, CardText, CardDate } from "../Card/Card.styled";

export default function NewsItem() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/events/${id}`);

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
        <CardDate $variant="event">
          Wann?{"       "}
          {data.date}
        </CardDate>
        <CardText
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></CardText>
      </Card>
    </>
  );
}
