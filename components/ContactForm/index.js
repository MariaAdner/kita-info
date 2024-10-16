import { StyledForm, StyledLabel } from "./ContactForm.styled";
import { mutate } from "swr";

export default function ContactForm() {
  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch("/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(new FormData(event.target))),
    });

    if (response.ok) {
      mutate();
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <fieldset>
        <StyledLabel htmlFor="name">
          Name
          <input type="text" id="name" name="name" required />
        </StyledLabel>
        <StyledLabel htmlFor="email">
          E-Mail-Adresse
          <input type="email" id="email" name="email" required />
        </StyledLabel>
        <StyledLabel htmlFor="message">
          Ihre Nachricht
          <textarea rows="3" id="message" name="message" required></textarea>
        </StyledLabel>
        <div>
          <StyledLabel>
            <input
              type="checkbox"
              name="Datenverarbeitung bestätigt"
              value="Ja"
              required
            />
            Ich bestätige, dass ich mit der Verarbeitung meiner Eingaben zum
            Zwecke der Anfragebearbeitung, einverstanden bin.
          </StyledLabel>
        </div>
        <button type="submit">Senden</button>
      </fieldset>
    </StyledForm>
  );
}
