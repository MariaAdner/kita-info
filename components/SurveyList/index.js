import useSWR from "swr";
import { StyledList, StyledLink, StyledTitle } from "../StyledList/list.styled";

export default function SurveyList() {
  const { data: querys, isLoading } = useSWR("/api/survey");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!surveys) {
    return;
  }

  return surveys.length ? (
    <StyledList>
      {surveys.map(({ _id, title }) => (
        <li key={_id}>
          <StyledLink href={`/profile/survey/${_id}`}>
            <StyledTitle>{title}</StyledTitle>
          </StyledLink>
        </li>
      ))}
    </StyledList>
  ) : (
    "Keine Abfragen"
  );
}
