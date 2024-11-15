import SubHeader from "@/components/SubHeader";
import Tablesaying from "@/components/Tablesaying";
import Song from "@/components/Song";

export default function Aktuelles() {
  return (
    <>
      <SubHeader $variant="menu">Aktuelles</SubHeader>
      <div>
        <Tablesaying />
        <Song />
      </div>
    </>
  );
}
