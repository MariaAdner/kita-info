import Link from "next/link";
import { Menu } from "./StartPage.styled";
import { MenuLink } from "./StartPage.styled";
import { StyledLink } from "./StartPage.styled";

export default function StartPage() {
  return (
    <Menu>
      <StyledLink href="/neuigkeiten">
        <MenuLink>Neuigkeiten</MenuLink>
      </StyledLink>
      <StyledLink href="/termine">
        <MenuLink>Termine</MenuLink>
      </StyledLink>
      <StyledLink href="/aboutus">
        <MenuLink>Über uns</MenuLink>
      </StyledLink>
      <StyledLink href="/essen">
        <MenuLink>Essen</MenuLink>
      </StyledLink>
      <StyledLink href="/kontakt">
        <MenuLink>Kontakt</MenuLink>
      </StyledLink>
      <StyledLink href="/downloads">
        <MenuLink>Downloads</MenuLink>
      </StyledLink>
    </Menu>
  );
}
