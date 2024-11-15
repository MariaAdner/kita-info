import SubHeader from "@/components/SubHeader";
import Headline from "@/components/Headline";
import EventsList from "@/components/EventsList";
import Schließzeiten from "@/components/Schließzeiten";

export default function Dates() {
  return (
    <>
      <SubHeader $variant="menu">Termine</SubHeader>
      <Headline>Schließzeiten</Headline>
      <Schließzeiten />
      <h4>Veranstaltungen</h4>
      <EventsList />
    </>
  );
}
