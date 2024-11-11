import useSWR from "swr";
import {
  StyledList,
  StyledLink,
  StyledItem,
  StyledDate,
  StyledTitle,
} from "../StyledList/list.styled";

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
        <StyledItem key={_id}>
          <StyledLink href={`/profile/termine/${_id}`}>
            <StyledDate $variant="termine"> {date}</StyledDate>
            <StyledTitle>{title}</StyledTitle>
          </StyledLink>
        </StyledItem>
      ))}
    </StyledList>
  ) : (
    "Keine Veranstaltungen"
  );
}
