import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import { SessionProvider } from "next-auth/react";
import { AnimatePresence } from "framer-motion";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <SessionProvider session={session}>
          <Layout>
            <AnimatePresence mode="wait">
              <Component {...pageProps} />
            </AnimatePresence>
          </Layout>
        </SessionProvider>
      </SWRConfig>
    </>
  );
}
