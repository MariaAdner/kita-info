import useSWR from "swr";
import { NewsLink, StyledDate, StyledTitle } from "./NewsList.styled";
import { StyledList } from "./NewsList.styled";

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
          <NewsLink href={`/profile/neuigkeiten/${_id}`}>
            <StyledDate> {date}</StyledDate>
            <StyledTitle>{title}</StyledTitle>
          </NewsLink>
        </li>
      ))}
    </StyledList>
  ) : (
    "Keine Neuigkeiten"
  );
}
