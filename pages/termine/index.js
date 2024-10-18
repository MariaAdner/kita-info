import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import EventsList from "@/components/EventsList";
import HomeButton from "@/components/HomeButton";
import Schließzeiten from "@/components/Schließzeiten";

export default function Dates() {
  return (
    <>
      <Header />
      <HomeButton />
      <SubHeader>Termine</SubHeader>
      <h4>Schließzeiten</h4>
      <Schließzeiten />
      <h4>Veranstaltungen</h4>
      <EventsList />
    </>
  );
}
