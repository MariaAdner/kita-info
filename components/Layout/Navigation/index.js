import {
  StyledNavigation,
  StyledNavigationLink,
  StyledNavigationButton,
} from "./NavigationBar.styled";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import { HiHome, HiArrowNarrowLeft, HiOutlineUser } from "react-icons/hi";

export default function Navigation() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <StyledNavigation>
      <StyledNavigationButton onClick={() => router.push("/")}>
        <HiHome size={20} />
      </StyledNavigationButton>
      <StyledNavigationLink href="/">
        {router.pathname !== "/" &&
          router.pathname !== "/profile/thanks" &&
          router.pathname !== "/profile" && (
            <StyledNavigationButton onClick={() => router.back()}>
              <HiArrowNarrowLeft size={20} />
            </StyledNavigationButton>
          )}
      </StyledNavigationLink>
      {session
        ? router.pathname !== "/profile" && (
            <StyledNavigationLink href="/profile">
              <StyledNavigationButton>
                <HiOutlineUser size={20} />
              </StyledNavigationButton>
            </StyledNavigationLink>
          )
        : " "}
      {session ? (
        <StyledNavigationLink href="/">
          <StyledNavigationButton onClick={() => signOut({ callbackUrl: "/" })}>
            Log out
          </StyledNavigationButton>
        </StyledNavigationLink>
      ) : (
        <StyledNavigationLink href="/login">
          <StyledNavigationButton>Login</StyledNavigationButton>
        </StyledNavigationLink>
      )}
    </StyledNavigation>
  );
}
