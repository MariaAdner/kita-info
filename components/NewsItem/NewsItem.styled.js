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
      <h2>{data.title}</h2>
      <p>{data.date}</p>
      <p>Description: {data.text}</p>
    </>
  );
}