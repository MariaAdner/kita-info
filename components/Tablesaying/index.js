import useSWR from "swr";
import { Card } from "../Card/Card.styled";
import MenuHeadline from "../MenuHeadline";
import Container from "../Container";
import { GiMeal } from "react-icons/gi";

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
      <Container $variant="color">
        <GiMeal fontSize={50} color="var(--color-headline)" />
        <MenuHeadline>Unser Tischspruch</MenuHeadline>
        <Card $variant="green">
          {data.map(({ _id, description }) => (
            <li key={_id}>
              <p dangerouslySetInnerHTML={{ __html: description }}></p>
            </li>
          ))}
        </Card>
      </Container>
    </>
  );
}
