import { StyledForm, StyledLabel, StyledInput } from "./ContactForm.styled";
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
      <StyledInput>
        <input type="text" id="name" name="name" placeholder="Name" required />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-Mail"
          required
        />
        <textarea
          rows="3"
          id="message"
          name="message"
          placeholder="Ihre Nachricht oder Frage an uns"
          required
        ></textarea>
      </StyledInput>
      <StyledLabel>
        <input
          type="checkbox"
          name="Datenverarbeitung bestätigt"
          value="Ja"
          required
        />
        Ich bestätige, dass ich mit der Verarbeitung meiner Eingaben zum Zwecke
        der Anfragebearbeitung, einverstanden bin.
      </StyledLabel>
      <button type="submit">Senden</button>
    </StyledForm>
  );
}
