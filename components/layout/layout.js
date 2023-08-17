import React, { Fragment } from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import { Provider } from "react-redux";
import context from "../../context/index";

const Layout = (props) => {
  return (
    <Provider store={context}>
      <Fragment>
        <Navigation />
        <main>{props.children}</main>
        <Footer />
      </Fragment>
    </Provider>
  );
};

export default Layout;
