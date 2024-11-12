import useSWR from "swr";
import { useRouter } from "next/router";
import { Card, CardTitle, CardDate, CardText } from "../Card/Card.styled";

export default function NewsItem() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/news/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <Card $variant="yellow">
        <CardTitle>{data.title}</CardTitle>
        <CardText dangerouslySetInnerHTML={{ __html: data.text }}></CardText>
        <CardDate>{data.date}</CardDate>
      </Card>
    </>
  );
}
