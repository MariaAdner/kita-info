import SubHeader from "../SubHeader";
import Headline from "../Headline";
import {
  WelcomeSection,
  Textfield,
  FoodImage,
  WelcomeImage,
  AboutImage,
  ContactSection,
  FoodSection,
  AboutUsSection,
  ContactList,
  ContactListElement,
  StyledIcon,
  StyledContactLink,
  ContactStyled,
} from "./StartPage.styled";
import ImageGallery from "../ImageGallery";
import ContactForm from "../ContactForm";
import { HiOutlineMail, HiPhone, HiOutlineMap } from "react-icons/hi";

export default function StartPage() {
  return (
    <>
      <WelcomeSection>
        <div>
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
        </div>
        <WelcomeImage
          src="/spielplatz.jpeg"
          width={300}
          height={250}
          alt="kindergarten außen"
        />
      </WelcomeSection>

      <AboutUsSection>
        <AboutImage
          src="/spielen.jpg"
          width={300}
          height={300}
          alt="spielendes kind"
        />
        <div>
          <SubHeader $variant="white">Über uns</SubHeader>
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
            eine große Sandlandschaft sowie zwei Klettergerüste. Die Kinder
            können zudem verschiedene Fahrzeuge aus dem Geräteschuppen benutzen.
          </p>
        </div>
      </AboutUsSection>
      <Headline>Bildergalerie</Headline>
      <ImageGallery />

      <FoodSection>
        <div>
          <FoodImage
            src="/Essen.png"
            width={400}
            height={300}
            alt="picture of a meal"
          />
        </div>
        <div>
          <SubHeader $variant="blue">Essen</SubHeader>
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

      <ContactSection>
        <div>
          <SubHeader $variant="white">Kontakt</SubHeader>
          <p>Haus-Leitung: Lydia Pech</p>
          <p>Stellvertretung: Christiane Günther</p>
          <ContactList>
            <ContactListElement>
              <StyledIcon>
                <HiOutlineMap fontSize={25} />{" "}
              </StyledIcon>
              Fabrikstraße 11, 08297 Zwönitz
            </ContactListElement>
            <ContactListElement>
              <StyledIcon>
                <HiPhone fontSize={25} />{" "}
              </StyledIcon>
              037754 2855
            </ContactListElement>
            <ContactListElement>
              <StyledIcon>
                <HiOutlineMail fontSize={25} />
              </StyledIcon>
              <StyledContactLink href="mailto: kita.sternschnuppe@zwoenitz.de">
                kita.sternschnuppe@zwoenitz.de
              </StyledContactLink>
            </ContactListElement>
          </ContactList>
        </div>
        <ContactForm />
      </ContactSection>
      <Headline $startpage>Öffnungszeiten</Headline>
      <Textfield>
        <p>Montag - Freitag:</p>
        <p>6 - 17 Uhr</p>
      </Textfield>
    </>
  );
}
