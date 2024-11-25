import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import {
  StyledForm,
  StyledRadioButtonMenu,
  StyledRadioButton,
} from "./queryform.styled";
import { StyledButton } from "../Button/Button.styled";

export default function QueryForm() {
  const router = useRouter();
  const { id } = router.query;

  const { data: session } = useSession();
  const userId = session.user.id;

  const {
    data: user,
    userError,
    userIsLoading,
    mutate,
  } = useSWR(userId ? `/api/user/${userId}` : null);
  const {
    data: query,
    error,
    isLoading,
  } = useSWR(id ? `/api/querys/${id}` : null);

  // const { mutate } = useSWR(`/api/querys/${id}`);

  if (error || userError) return <div>failed to load</div>;
  if (isLoading || userIsLoading) return <div>loading...</div>;
  if (!query) return null;

  async function handleQuery(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const queryData = Object.fromEntries(formData);

    const foundEntry = user.querys.find((query) => queries._id === id);

    if (!foundEntry) {
      const response = await fetch(`/api/querys/${id}`, {
        method: foundEntry ? "PATCH" : "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(queryData),
      });
    }

    if (response.ok) {
      mutate();
    }

    router.push("/profile/thanks");
    console.log(queryData);
    console.log(foundEntry);
  }

  return (
    <>
      <StyledForm onSubmit={handleQuery}>
        <StyledRadioButtonMenu>
          <StyledRadioButton>
            <input type="radio" id="Ja" name="answer" value="Ja" />
            <label for="Ja">Ja</label>
          </StyledRadioButton>
          <StyledRadioButton>
            <input type="radio" id="Nein" name="answer" value="Nein" />
            <label for="Nein">Nein</label>
          </StyledRadioButton>
        </StyledRadioButtonMenu>
        <StyledButton type="submit">Absenden</StyledButton>
      </StyledForm>
    </>
  );
}
