import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import { Provider } from "react-redux";
import context from "../../context/index";

const Layout = (props) => {
  return (
    <Provider store={context}>
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </Provider>
  );
};

export default Layout;
