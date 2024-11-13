import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledInputField,
  StyledTextarea,
} from "./ContactForm.styled";
import { StyledButton } from "../Button/Button.styled";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function ContactForm() {
  const { mutate } = useSWR("/api/message");
  const router = useRouter();

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

    router.push("/sendmessage");
    event.target.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput>
        <StyledInputField
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
        />
        <StyledInputField
          type="email"
          id="email"
          name="email"
          placeholder="E-Mail"
          required
        />
        <StyledTextarea
          rows="5"
          id="message"
          name="message"
          placeholder="Ihre Nachricht oder Frage an uns"
          required
        ></StyledTextarea>
      </StyledInput>

      <div>
        <StyledButton $variant="white" type="submit">
          Senden
        </StyledButton>
      </div>
    </StyledForm>
  );
}
