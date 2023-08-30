import Head from "next/head";
import React, { Fragment } from "react";
import Home from "@/components/home-page/home-page";
import { mainJSON, categoryItems } from "@/data/data";

async function getData() {
  const response = await fetch("http://localhost:3000/api/auth/get-users");
  const data = await response.json();
  return data;
}

export const HomePage = (props) => {
  const data = getData();

  return (
    <Fragment>
      <Head>
        <title>Munched - Delivery App</title>
        <meta
          name="description"
          content="Delivery app to order food from restaurants nearby."
        />
      </Head>
      <Home
        user={data}
        restaurants={props.restaurants}
        categories={props.categories}
      />
    </Fragment>
  );
};

export async function getServerSideProps() {
  const categories = categoryItems;
  const restaurants = mainJSON;

  return {
    props: {
      data: data,
      categories: categories,
      restaurants: restaurants,
    },
  };
}

export default HomePage;
