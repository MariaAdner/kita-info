import Header from "@/components/Header";
import HomeButton from "@/components/HomeButton";
import SubHeader from "@/components/SubHeader";

export default function Essen() {
  return (
    <>
      <Header />
      <HomeButton />
      <SubHeader>Essen</SubHeader>

      <h3>
        Verpflegung durch
        <span>
          <a href="https://bestellung.h3-schmeckt.de/">H3-Group</a>
        </span>
        <p>
          Der Speiseplan kann unter dem
          <a href="https://bestellung.h3-essen.de/">Login</a>
          eingesehen werden
        </p>
      </h3>
    </>
  );
}
