import Link from "next/link";
import { Menu } from "./StartPage.styled";
import { MenuLink } from "./StartPage.styled";

export default function StartPage() {
  return (
    <Menu>
      <Link href="/neuigkeiten">
        <MenuLink>Neuigkeiten</MenuLink>
      </Link>
      <Link href="/termine">
        <MenuLink>Termine</MenuLink>
      </Link>
      <Link href="/about">
        <MenuLink>Über uns</MenuLink>
      </Link>
      <Link href="/essen">
        <MenuLink>Essen</MenuLink>
      </Link>
      <Link href="/kontakt">
        <MenuLink>Kontakt</MenuLink>
      </Link>
      <Link href="/downloads">
        <MenuLink>Downloads</MenuLink>
      </Link>
    </Menu>
  );
}
