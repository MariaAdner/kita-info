import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import NavigationBar from "@/components/NavigationBar";
import Header from "@/components/Header";
import { SessionProvider } from "next-auth/react";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Header />
        <SessionProvider session={session}>
          <Component {...pageProps} />
          <NavigationBar />
        </SessionProvider>
      </SWRConfig>
    </>
  );
}
