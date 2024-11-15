import SubHeader from "@/components/SubHeader";
import MenuHeadline from "@/components/MenuHeadline";
import EventsList from "@/components/EventsList";
import Schließzeiten from "@/components/Schließzeiten";

export default function Dates() {
  return (
    <>
      <SubHeader $variant="menu">Termine</SubHeader>
      <MenuHeadline>Schließzeiten</MenuHeadline>
      <Schließzeiten />
      <MenuHeadline>Veranstaltungen</MenuHeadline>
      <EventsList />
    </>
  );
}
