import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import EventsList from "@/components/EventsList";
import Schließzeiten from "@/components/Schließzeiten";
import NavigationBar from "@/components/NavigationBar";

export default function Dates() {
  return (
    <>
      <Header />
      <SubHeader>Termine</SubHeader>
      <h4>Schließzeiten</h4>
      <Schließzeiten />
      <h4>Veranstaltungen</h4>
      <EventsList />
      <NavigationBar />
    </>
  );
}
