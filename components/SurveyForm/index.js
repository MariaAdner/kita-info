import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import {
  StyledForm,
  StyledRadioButtonMenu,
  StyledRadioButton,
} from "./queryform.styled";
import { StyledButton } from "../Button/Button.styled";

export default function SurveyForm() {
  const router = useRouter();
  const { id } = router.query;

  const { mutate } = useSWR(`/api/surveys/${id}`);

  async function handleSurvey(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const surveyData = Object.fromEntries(formData);

    const response = await fetch(`/api/surveys/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(surveyData),
    });

    if (response.ok) {
      mutate();
    }

    router.push("/profile/thanks");
    console.log(surveyData);
  }

  return (
    <>
      <StyledForm onSubmit={handleSurvey}>
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
