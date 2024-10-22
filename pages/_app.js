import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";
import GlobalStyle from "../styles";
import NavigationBar from "@/components/NavigationBar";
import Header from "@/components/Header";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <GlobalStyle />
      <SessionProvider session={session}>
        <SWRConfig value={{ fetcher }}>
          <Header />
          <Component {...pageProps} />
          <NavigationBar />
        </SWRConfig>
      </SessionProvider>
    </>
  );
}
