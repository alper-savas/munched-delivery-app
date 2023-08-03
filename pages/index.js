import Head from "next/head";
import React, { Fragment } from "react";
import Hero from "../components/home-page/hero";

export const HomePage = () => {
  return (
    <Fragment>
      <Head></Head>
      <Hero />
    </Fragment>
  );
};

export default HomePage;
