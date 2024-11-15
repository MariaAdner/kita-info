import ProfileOverview from "@/components/ProfilOverview";
import SubHeader from "@/components/SubHeader";

export default function Profile() {
  return (
    <div>
      <SubHeader $variant="menu">Übersicht</SubHeader>
      <ProfileOverview />
    </div>
  );
}
