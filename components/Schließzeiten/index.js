import { StyledTable, StyledColumn } from "./termine.styled";

export default function Schließzeiten() {
  return (
    <StyledTable>
      <tbody>
        <tr>
          <StyledColumn>02.01.2024</StyledColumn>
          <StyledColumn>Öffnung nach Bedarf</StyledColumn>
        </tr>
        <tr>
          <StyledColumn>12.02.2024</StyledColumn>
          <StyledColumn>Pädagogischer Tag</StyledColumn>
        </tr>
        <tr>
          <StyledColumn>10.05.2024</StyledColumn>
          <StyledColumn>Brückentag</StyledColumn>
        </tr>
        <tr>
          <StyledColumn>04.10.2024</StyledColumn>
          <StyledColumn>Brückentag</StyledColumn>
        </tr>
        <tr>
          <StyledColumn>30.10.2024</StyledColumn>
          <StyledColumn>Pädagogischer Tag, Grundreinigung</StyledColumn>
        </tr>
        <tr>
          <StyledColumn>01.11.2024</StyledColumn>
          <StyledColumn>Brückentag, Grundreinigung</StyledColumn>
        </tr>
        <tr>
          <StyledColumn>23.12.2024 - 01.01.2025</StyledColumn>
          <StyledColumn>Weihnachtspause</StyledColumn>
        </tr>
      </tbody>
    </StyledTable>
  );
}
