import SubHeader from "@/components/SubHeader";
import styled from "styled-components";
import ImageGallery from "@/components/ImageGallery";

const StyledArticle = styled.article`
  line-height: 125%;
  background-color: var(--color-background-text);
  padding: 20px;
  margin: 10 0 10 0;
  width: 100%;
`;

const StyledSubHeadline = styled.h3`
  margin: 50px;
  color: var(--color-headline);
`;

export default function AboutUs() {
  return (
    <>
      <SubHeader>Über uns</SubHeader>
      <StyledArticle>
        Die Kita Sternschnuppe befindet sich im Zwönitzer Ortsteil Dorfchemnitz.
        Auf 400 Quaddrametern bietet die Einrichtung Platz für insgesamt 75
        Kinder. Im Erdgeschoss gibt es eine große Garderobe und die Räume der
        Vorschulgruppe, Wackelzähne. Im Obergeschoss sind die Krippenräume und
        die Gruppenräume der Kindergartenkinder. In jeder Gruppe gibt es
        themenbezogene Räume zum Bauen und Konstruieren, Enstpannen und
        Bastelen/Essen. Das Außengelände ist unterteilt in Krippe und
        Kindergarten/Hort. Es gibt eine große Sandlandschaft........
      </StyledArticle>
      <StyledSubHeadline>Bildergalerie</StyledSubHeadline>
      <ImageGallery />
    </>
  );
}
