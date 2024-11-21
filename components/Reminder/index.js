import { useRouter } from "next/router";
import useSWR from "swr";
import { Card, CardDate, CardText } from "../Card/Card.styled";

export default function Reminder() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/reminder/${id}`);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (!data) {
    return;
  }

  const today = new Date();

  if (today > data.date)
    return (
      <>
        <Card $variant="red">
          <CardDate>{data.date}</CardDate>
          <CardText dangerouslySetInnerHTML={{ __html: data.text }}>
            {data.text}
          </CardText>
        </Card>
      </>
    );
}
