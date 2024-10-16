import Header from "@/components/Header";
import HomeButton from "@/components/HomeButton";
import SubHeader from "@/components/SubHeader";
import { StyledArticle } from "./kontakt.styled";
import ContactForm from "@/components/ContactForm";

export default function Kontakt() {
  return (
    <>
      <Header />
      <HomeButton />
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
