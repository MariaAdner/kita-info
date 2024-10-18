import Header from "@/components/Header";
import HomeButton from "@/components/HomeButton";
import NavigationBar from "@/components/NavigationBar";
import SubHeader from "@/components/SubHeader";
import Image from "next/image";

export default function Essen() {
  return (
    <>
      <Header />
      <SubHeader>Essen</SubHeader>
      <Image
        src="/Essen.png"
        width={400}
        height={300}
        alt="picture of a meal"
      />
      <p>
        {"Verpflegung durch "}

        <a href="https://bestellung.h3-schmeckt.de/">H3-Group</a>
      </p>
      <p>
        {"Der Speiseplan kann unter dem "}

        <a href="https://bestellung.h3-essen.de/">Login</a>

        {" eingesehen werden."}
      </p>
      <NavigationBar />
    </>
  );
}
