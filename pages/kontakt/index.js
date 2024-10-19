import SubHeader from "@/components/SubHeader";
import ContactForm from "@/components/ContactForm";
import styled from "styled-components";

const StyledArticle = styled.article`
  background-color: var(--color-background);
  padding: 20px;
  margin-bottom: 100px;
`;

export default function Kontakt() {
  return (
    <>
      <SubHeader>Kontakt</SubHeader>
      <StyledArticle>
        <div>
          <p>Haus-Leitung: Lydia Pech</p>
          <p>Stellvertretung: Christiane Günther</p>
        </div>
        <div>
          <p>Adresse: Fabrikstraße 11, 08297 Zwönitz</p>
          <p>Telefon: 037754 2855</p>
          <p>E-Mail: kita.sternschnuppe@zwoenitz.de</p>
        </div>
        <ContactForm />
        <h4>Öffnungszeiten</h4>
        <p>Montag - Freitag:</p>
        <p>6 - 17 Uhr</p>
      </StyledArticle>
    </>
  );
}
