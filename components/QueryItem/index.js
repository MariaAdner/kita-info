import { useRouter } from "next/router";
import useSWR from "swr";

export default function QueryItem() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/querys/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <h2>{data.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: data.text }}></p>
      {data.query !== " " && (
        <p>
          Sie haben sich bereits für <strong>{data.answer} </strong>entschieden.
        </p>
      )}
    </>
  );
}
