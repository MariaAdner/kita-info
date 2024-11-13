import Navigation from "./Navigation";
import Header from "./Header";
import { Fragment } from "react";

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
      <Navigation />
      <main>{props.children}</main>
    </Fragment>
  );
}
