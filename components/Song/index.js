import useSWR from "swr";
import { Card, CardTitle } from "../Card/Card.styled";
import MenuHeadline from "../MenuHeadline";
import Container from "../Container";
import { GiLoveSong } from "react-icons/gi";

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
      <Container $variant="blue">
        <GiLoveSong fontSize={50} color="var(--color-headline)" />
        <MenuHeadline>Das Lied, das wir gerade singen: </MenuHeadline>
        <Card $variant="yellow">
          {songs.map(({ _id, title, description }) => (
            <li key={_id}>
              <CardTitle>{title}</CardTitle>
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
            </li>
          ))}
        </Card>
      </Container>
    </>
  );
}
