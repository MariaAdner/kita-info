import SubHeader from "@/components/SubHeader";
import EventsList from "@/components/EventsList";
import Schließzeiten from "@/components/Schließzeiten";

export default function Dates() {
  return (
    <>
      <SubHeader>Termine</SubHeader>
      <h4>Schließzeiten</h4>
      <Schließzeiten />
      <h4>Veranstaltungen</h4>
      <EventsList />
    </>
  );
}
