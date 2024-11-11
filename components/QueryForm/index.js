import { useRouter } from "next/router";
import useSWR from "swr";

export default function QueryForm() {
  const router = useRouter();
  const { id } = router.query;

  const { mutate } = useSWR(`/api/querys/${id}`);

  async function handleQuery(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const queryData = Object.fromEntries(formData);

    const response = await fetch(`/api/querys/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(queryData),
    });

    if (response.ok) {
      mutate();
    }

    router.push("/profile/thanks");
    console.log(queryData);
  }

  return (
    <>
      <form onSubmit={handleQuery}>
        <div>
          <input type="radio" id="Ja" name="answer" value="Ja" />
          <label for="Ja">Ja</label>
        </div>
        <div>
          <input type="radio" id="Nein" name="answer" value="Nein" />
          <label for="Nein">Nein</label>
        </div>
        <button type="submit">Absenden</button>
      </form>
    </>
  );
}
