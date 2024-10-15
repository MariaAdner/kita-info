import Header from "@/components/Header";
import HomeButton from "@/components/HomeButton";
import SubHeader from "@/components/SubHeader";
import { StyledArticle, StyledSubHeadline } from "./aboutus.styled";

export default function AboutUs() {
  return (
    <>
      <Header />
      <HomeButton />
      <SubHeader>Über uns</SubHeader>
      <StyledArticle>
        Die Kita <b>Sternschnuppe</b> befindet sich im Zwönitzer Ortsteil
        Dorfchemnitz. Auf 400 Quaddrametern bietet die Einrichtung Platz für
        insgesamt 75 Kinder. Im Erdgeschoss gibt es eine große Garderobe und die
        Räume der Vorschulgruppe, Wackelzähne. Im Obergeschoss sind die
        Krippenräume und die Gruppenräume der Kindergartenkinder. In jeder
        Gruppe gibt es themenbezogene Räume zum Bauen und Konstruieren,
        Enstpannen und Bastelen/Essen. Das Außengelände ist unterteilt in Krippe
        und Kindergarten/Hort. Es gibt eine große Sandlandschaft........
      </StyledArticle>
      <StyledSubHeadline>Bildergalerie</StyledSubHeadline>
    </>
  );
}
