import useSWR from "swr";
import { Card, CardTitle } from "../Card/Card.styled";
import MenuHeadline from "../MenuHeadline";

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
      <MenuHeadline>Das Lied, das wir gerade singen: </MenuHeadline>
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
