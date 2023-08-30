import Head from "next/head";
import React, { Fragment } from "react";
import Home from "@/components/home-page/home-page";
import { mainJSON, categoryItems } from "@/data/data";
import axios from "axios";

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
      <Home
        user={props.data}
        restaurants={props.restaurants}
        categories={props.categories}
      />
    </Fragment>
  );
};

export async function getServerSideProps() {
  // const response = await fetch("http://localhost:3000/api/auth/get-users");
  const response = await axios.get(`http://localhost:3000/api/auth/get-users`);
  const data = response.data;
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
