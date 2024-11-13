import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";
import { Fragment } from "react";

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}
