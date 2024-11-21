import Link from "next/link";
import { StyledButton } from "@/components/Button/Button.styled";
import Container from "@/components/Container";

export default function SendMessage() {
  return (
    <Container>
      <p>Vielen Dank wir haben Ihre Nachricht erhalten!</p>
      <Link href="/">
        <StyledButton>Zurück zur Startseite</StyledButton>
      </Link>
    </Container>
  );
}
