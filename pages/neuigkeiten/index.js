import NewsList from "@/components/NewsList";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";
import NavigationBar from "@/components/NavigationBar";

export default function Neuigkeiten() {
  return (
    <>
      <Header />
      <div>
        <SubHeader>Neuigkeiten</SubHeader>
        <NewsList />
      </div>
      <NavigationBar />
    </>
  );
}
