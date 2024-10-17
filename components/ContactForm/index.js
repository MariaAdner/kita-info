import { StyledForm, StyledLabel } from "./ContactForm.styled";
import useSWR from "swr";

export default function ContactForm() {
  const { mutate } = useSWR("/api/message");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const messageData = Object.fromEntries(formData);

    const response = await fetch("/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageData),
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
