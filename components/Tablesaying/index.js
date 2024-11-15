import useSWR from "swr";
import { Card } from "../Card/Card.styled";
import Headline from "../Headline";

export default function Tablesaying() {
  const { data, isLoading } = useSWR("/api/tablesaying");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <Headline>Unser Tischspruch</Headline>
      <Card $variant="green">
        {data.map(({ _id, description }) => (
          <li key={_id}>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </li>
        ))}
      </Card>
    </>
  );
}
