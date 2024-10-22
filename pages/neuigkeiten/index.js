import NewsList from "@/components/NewsList";
import SubHeader from "@/components/SubHeader";
import { useSession } from "next-auth/react";

export default function Neuigkeiten() {
  const { data: session } = useSession();

  return (
    <>
      <div>
        <SubHeader>Neuigkeiten</SubHeader>
        {session && <NewsList />}
      </div>
    </>
  );
}
