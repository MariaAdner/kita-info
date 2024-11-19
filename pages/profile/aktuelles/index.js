import SubHeader from "@/components/SubHeader";
import Tablesaying from "@/components/Tablesaying";
import Song from "@/components/Song";
import Transition from "@/components/Layout/Transition";

export default function Aktuelles() {
  return (
    <>
      <SubHeader $variant="menu">Aktuelles</SubHeader>
      <div>
        <Transition>
          <Tablesaying />
        </Transition>
        <Transition>
          <Song />
        </Transition>
      </div>
    </>
  );
}
