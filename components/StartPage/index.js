import SubHeader from "../SubHeader";
import {
  Article,
  Headline,
  Textfield,
  StyledImage,
  ContactSection,
  FoodSection,
  AboutUsSection,
} from "./StartPage.styled";
import ImageGallery from "../ImageGallery";
import ContactForm from "../ContactForm";

export default function StartPage() {
  return (
    <>
      <Article>
        <p>
          <strong>Herzlich Willkommen </strong> auf unserer Internetseite!
        </p>
        <p>
          Auf dieser Seite möchten wir uns mit einigen Zeilen kurz vorstellen.
        </p>
        <p>
          Eltern haben zudem die Möglichkeit, sich über ein Login-Konto, über
          wichtige Informationen, Neuigkeiten und Termine auf dem Laufenden zu
          halten, Krankmeldungen vorzunehmen und über den kurzen schnellen Weg
          mit der Kita zu kommunizieren.
        </p>
      </Article>
      <SubHeader>Über uns</SubHeader>
      <AboutUsSection>
        <p>
          Die Kita Sternschnuppe befindet sich im Zwönitzer Ortsteil
          Dorfchemnitz. Auf 400 Quaddrametern bietet die Einrichtung Platz für
          insgesamt 75 Kinder.
        </p>
        <p>
          Im Erdgeschoss gibt es eine große Garderobe und die Räume der
          Vorschulgruppe. Im Obergeschoss sind die Räume der Krippe und die
          Gruppenräume der Kindergartenkinder. In jeder Gruppe gibt es
          themenbezogene Räume zum Bauen und Konstruieren, Enstpannen, Basteln
          und Essen.
        </p>
        <p>
          Das Außengelände ist unterteilt in Krippe und Kindergarten. Es gibt
          eine große Sandlandschaft sowie zwei Klettergerüste. Die Kinder können
          zudem verschiedene Fahrzeuge aus dem Geräteschuppen benutzen.
        </p>
      </AboutUsSection>
      <Headline>Bildergalerie</Headline>
      <ImageGallery />

      <SubHeader>Essen</SubHeader>

      <FoodSection>
        <div>
          <StyledImage
            src="/Essen.png"
            width={400}
            height={300}
            alt="picture of a meal"
          />
        </div>
        <div>
          <p>
            {"Unser Mittagessen wird vom Catering der  "}

            <a href="https://bestellung.h3-schmeckt.de/">H3-Group</a>
            {" übernommen."}
          </p>
          <p>
            {"Der Speiseplan kann "}

            <a href="https://bestellung.h3-essen.de/">hier</a>

            {" nach dem Login eingesehen werden."}
          </p>
        </div>
      </FoodSection>

      <SubHeader>Kontakt</SubHeader>

      <ContactSection>
        <div>
          <p>Haus-Leitung: Lydia Pech</p>
          <p>Stellvertretung: Christiane Günther</p>
          <p>Adresse: Fabrikstraße 11, 08297 Zwönitz</p>
          <p>Telefon: 037754 2855</p>
          E-Mail:
          <a href="mailto: kita.sternschnuppe@zwoenitz.de">
            kita.sternschnuppe@zwoenitz.de
          </a>
        </div>
        <ContactForm />
      </ContactSection>
      <Headline>Öffnungszeiten</Headline>
      <Textfield>
        <p>Montag - Freitag:</p>
        <p>6 - 17 Uhr</p>
      </Textfield>
    </>
  );
}
