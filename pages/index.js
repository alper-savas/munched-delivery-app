import Head from "next/head";
import React, { Fragment } from "react";
import Hero from "../components/home-page/hero";
import Categories from "../components/home-page/categories";
import Restaurants from "../components/home-page/restaurants";
import Collaborate from "../components/home-page/collaborate";
import Mobile from "@/components/home-page/mobile";

export const HomePage = () => {
  return (
    <Fragment>
      <Head></Head>
      <Hero />
      <Categories />
      <Restaurants />
      <Collaborate />
      <Mobile />
    </Fragment>
  );
};

export default HomePage;
