import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import { StyledColumn, StyledTable } from "./termine.styled";
import EventsList from "@/components/EventsList";

export default function Dates() {
  return (
    <>
      <Header />
      <SubHeader>Termine</SubHeader>
      <h4>Schließzeiten</h4>
      <StyledTable>
        <tbody>
          <tr>
            <StyledColumn>02. Januar 2024</StyledColumn>
            <StyledColumn>Öffnung nach Bedarf</StyledColumn>
          </tr>
          <tr>
            <StyledColumn>12. Februar 2024</StyledColumn>
            <StyledColumn>Pädagogischer Tag</StyledColumn>
          </tr>
          <tr>
            <StyledColumn>10. Mai 2024</StyledColumn>
            <StyledColumn>Brücktag</StyledColumn>
          </tr>
          <tr>
            <StyledColumn>04. Oktober 2024</StyledColumn>
            <StyledColumn>Brücktag</StyledColumn>
          </tr>
          <tr>
            <StyledColumn>30. Oktober 2024</StyledColumn>
            <StyledColumn>Pädagogischer Tag, Grundreinigung</StyledColumn>
          </tr>
          <tr>
            <StyledColumn>01. November 2024</StyledColumn>
            <StyledColumn>Brücktag, Grundreinigung</StyledColumn>
          </tr>
          <tr>
            <StyledColumn>23. Dezember bis 01. Januar 2025</StyledColumn>
            <StyledColumn>Weihnachtspause</StyledColumn>
          </tr>
        </tbody>
      </StyledTable>
      <h4>Veranstaltungen</h4>
      <EventsList />
    </>
  );
}
