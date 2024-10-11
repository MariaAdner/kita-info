import useSWR from "swr";
import { useRouter } from "next/router";

export default function NewsItem() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/news/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <h4>{data.title}</h4>
      <p>{data.date}</p>
      <p> {data.text}</p>
    </>
  );
}
