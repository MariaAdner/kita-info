import useSWR from "swr";
import {
  StyledList,
  StyledLink,
  StyledDate,
  StyledTitle,
} from "../StyledList/list.styled";

export default function NewsList() {
  const { data: news, isLoading } = useSWR("/api/news");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!news) {
    return;
  }

  return news.length ? (
    <StyledList>
      {news.map(({ _id, title, date }) => (
        <li key={_id}>
          <StyledLink href={`/profile/neuigkeiten/${_id}`}>
            <StyledDate> {date}</StyledDate>
            <StyledTitle>{title}</StyledTitle>
          </StyledLink>
        </li>
      ))}
    </StyledList>
  ) : (
    "Keine Neuigkeiten"
  );
}
