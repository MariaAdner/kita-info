import useSWR from "swr";
import { Card, CardTitle, Headline } from "../Card/Card.styled";

export default function Song() {
  const { data: songs, isLoading } = useSWR("/api/songs");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!songs) {
    return;
  }

  return (
    <>
      <Headline>Das Lied, das wir gerade singen: </Headline>
      <Card $variant="yellow">
        {songs.map(({ _id, title, description }) => (
          <li key={_id}>
            <CardTitle>{title}</CardTitle>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </li>
        ))}
      </Card>
    </>
  );
}
