import { useSession } from "next-auth/react";
import {
  Menu,
  MenuLink,
  StyledLink,
} from "@/components/StyledItem/Item.styled";
import styled from "styled-components";

const StyledGreeting = styled.h4`
  font-weight: 300;
  text-color: var (--color-text);
`;

export default function ProfileOverview() {
  const { data: session } = useSession();
  console.log(session);

  if (session)
    return (
      <div>
        <StyledGreeting>
          Hallo, lieber <strong>{session.user.name}</strong> !
        </StyledGreeting>
        <Menu>
          <StyledLink href="profile/aktuelles">
            <MenuLink> Aktuelles </MenuLink>
          </StyledLink>
          <StyledLink href="profile/neuigkeiten">
            <MenuLink> Neuigkeiten </MenuLink>
          </StyledLink>
          <StyledLink href="profile/query">
            <MenuLink> Bedarfsabfragen </MenuLink>
          </StyledLink>
          <StyledLink href="profile/termine">
            <MenuLink> Termine </MenuLink>
          </StyledLink>
        </Menu>
      </div>
    );
}
