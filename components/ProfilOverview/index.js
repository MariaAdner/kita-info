import { useSession } from "next-auth/react";
import {
  Menu,
  MenuLink,
  StyledLink,
} from "@/components/StyledMenu/Menu.styled";
import styled from "styled-components";
import { HiOutlineCalendar } from "react-icons/hi";
import {
  HiOutlineNewspaper,
  HiOutlineClipboardDocumentCheck,
} from "react-icons/hi2";
import { IoInformationCircleOutline } from "react-icons/io5";

const StyledGreeting = styled.h4`
  font-weight: 300;
  text-color: var (--color-text);
  padding-left: 30px;
`;

const IconStyled = styled.span``;

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
            <MenuLink>
              Aktuelles
              <IconStyled>
                <HiOutlineNewspaper fontSize={50} />
              </IconStyled>
            </MenuLink>
          </StyledLink>
          <StyledLink href="profile/neuigkeiten">
            <MenuLink>
              Informationen
              <IconStyled>
                <IoInformationCircleOutline fontSize={50} />
              </IconStyled>
            </MenuLink>
          </StyledLink>
          <StyledLink href="profile/query">
            <MenuLink>
              Abfragen
              <IconStyled>
                <HiOutlineClipboardDocumentCheck fontSize={50} />
              </IconStyled>
            </MenuLink>
          </StyledLink>
          <StyledLink href="profile/termine">
            <MenuLink>
              Termine
              <IconStyled>
                <HiOutlineCalendar fontSize={50} />
              </IconStyled>
            </MenuLink>
          </StyledLink>
        </Menu>
      </div>
    );
}
