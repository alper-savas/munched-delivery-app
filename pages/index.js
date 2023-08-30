import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import Home from "@/components/home-page/home-page";
import { mainJSON, categoryItems } from "@/data/data";

export const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Munched - Delivery App</title>
        <meta
          name="description"
          content="Delivery app to order food from restaurants nearby."
        />
      </Head>
      <Home restaurants={props.restaurants} categories={props.categories} />
    </Fragment>
  );
};

export async function getServerSideProps() {
  const categories = categoryItems;
  const restaurants = mainJSON;

  return {
    props: {
      categories: categories,
      restaurants: restaurants,
    },
  };
}

export default HomePage;
