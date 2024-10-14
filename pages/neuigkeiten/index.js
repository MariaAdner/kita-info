import NewsList from "@/components/NewsList";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import HomeButton from "@/components/HomeButton";

export default function Neuigkeiten() {
  return (
    <>
      <Header />
      <HomeButton />
      <div>
        <SubHeader>Neuigkeiten</SubHeader>
        <NewsList />
      </div>
    </>
  );
}
