import NewsList from "@/components/NewsList";
import SubHeader from "@/components/SubHeader";

export default function Neuigkeiten() {
  return (
    <>
      <div>
        <SubHeader $variant="menu">Informationen</SubHeader>
        <NewsList />
      </div>
    </>
  );
}
