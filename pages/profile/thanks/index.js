import Link from "next/link";
import { StyledButton } from "@/components/Button/Button.styled";
import Container from "@/components/Container";

export default function Thanks() {
  return (
    <Container>
      <p> Vielen Dank, wir haben Ihre Nachricht erhalten!</p>
      <Link href="/profile">
        <StyledButton>Zurück zur Übersicht</StyledButton>
      </Link>
    </Container>
  );
}
