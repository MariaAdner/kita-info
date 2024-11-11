import useSWR from "swr";
import { StyledList, StyledLink, StyledTitle } from "../StyledList/list.styled";

export default function QueryList() {
  const { data: querys, isLoading } = useSWR("/api/querys");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!querys) {
    return;
  }

  return querys.length ? (
    <StyledList>
      {querys.map(({ _id, title }) => (
        <li key={_id}>
          <StyledLink href={`/profile/query/${_id}`}>
            <StyledTitle>{title}</StyledTitle>
          </StyledLink>
        </li>
      ))}
    </StyledList>
  ) : (
    "Keine Abfragen"
  );
}
