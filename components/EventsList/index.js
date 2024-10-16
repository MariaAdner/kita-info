import useSWR from "swr";
import { NewsLink, StyledDate, StyledTitle } from "../NewsList/NewsList.styled";
import { StyledList } from "../NewsList/NewsList.styled";

export default function EventsList() {
  const { data: events, isLoading } = useSWR("/api/events");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!events) {
    return;
  }

  return events.length ? (
    <StyledList>
      {events.map(({ _id, title, date }) => (
        <li key={_id}>
          <NewsLink href={`/termine/${_id}`}>
            <StyledDate> {date}:</StyledDate>
            <StyledTitle>{title}</StyledTitle>
          </NewsLink>
        </li>
      ))}
    </StyledList>
  ) : (
    "Keine Veranstaltungen"
  );
}
