import { useSession } from "next-auth/react";
import { Menu, MenuLink, StyledLink } from "@/components/Item/Item.styled";

export default function ProfileOverview() {
  const { data: session } = useSession();

  if (session)
    return (
      <div>
        <h4> Hallo, lieber {session.user.name}</h4>
        <Menu>
          <StyledLink href="profile/aktuelles">
            <MenuLink> Aktuelles </MenuLink>
          </StyledLink>
          <StyledLink href="/neuigkeiten">
            <MenuLink> Neuigkeiten </MenuLink>
          </StyledLink>
          <StyledLink href="profile/bedarfsabfragen">
            <MenuLink> Bedarfsabfragen </MenuLink>
          </StyledLink>
        </Menu>
      </div>
    );
}
