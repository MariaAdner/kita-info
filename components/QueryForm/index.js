import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import {
  StyledForm,
  StyledRadioButtonMenu,
  StyledRadioButton,
} from "./queryform.styled";
import { StyledButton } from "../Button/Button.styled";

export default function QueryForm({ id }) {
  async function handleQuery(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const queryData = Object.fromEntries(formData);

    const response = await fetch(`/api/user/${id}/queries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(queryData),
    });
  }

  if (response.ok) {
    mutate(`/api/user/${id}`);
  }

  router.push("/profile/thanks");
  console.log(queryData);

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
