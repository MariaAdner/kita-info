import useSWR from "swr";
import Link from "next/link";

export default function NewsList() {
  const { data: news, isLoading } = useSWR("/api/news");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!news) {
    return;
  }

  return (
    <ul>
      {news.map(({ _id, title }) => (
        <li key={_id}>
          <Link href={`/${_id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
