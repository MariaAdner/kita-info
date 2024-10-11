import useSWR from "swr";
import Link from "next/link";
import { NewsLink } from "./NewsList.styled";

export default function NewsList() {
  const { data: news, isLoading } = useSWR("/api/news");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!news) {
    return;
  }

  return news.length ? (
    <ul>
      {news.map(({ _id, title, date, text }) => (
        <li key={_id}>
          <NewsLink href={`/neuigkeiten/${_id}`}>{title}</NewsLink>
        </li>
      ))}
    </ul>
  ) : (
    "No news yet"
  );
}
