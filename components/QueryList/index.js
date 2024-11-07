import useSWR from "swr";
import Link from "next/link";

export default function QueryList() {
  const { data: querys, isLoading } = useSWR("/api/querys");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!querys) {
    return;
  }

  return querys.length ? (
    <ul>
      {querys.map(({ _id, title, date }) => (
        <li key={_id}>
          <Link href={`/profile/query/${_id}`}>
            <p>{title}</p>
            <p>{date}</p>
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    "Keine Abfragen"
  );
}
