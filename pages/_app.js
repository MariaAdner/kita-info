import { SWRConfig } from "swr";
import GlobalStyle from "../styles";
import NavigationBar from "@/components/NavigationBar";
import Header from "@/components/Header";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Header />
        <Component {...pageProps} />
        <NavigationBar />
      </SWRConfig>
    </>
  );
}
