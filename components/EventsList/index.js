import useSWR from "swr";
import {
  StyledList,
  EventsLink,
  StyledDate,
  StyledTitle,
} from "./EventsList.styled";

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
          <EventsLink href={`/profile/termine/${_id}`}>
            <StyledDate> {date}:</StyledDate>
            <StyledTitle>{title}</StyledTitle>
          </EventsLink>
        </li>
      ))}
    </StyledList>
  ) : (
    "Keine Veranstaltungen"
  );
}
