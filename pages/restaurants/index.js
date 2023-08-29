import React, { Fragment } from "react";
import Head from "next/head";
import AllRestaurants from "@/components/restaurants/all-restaurants";
import { mainJSON } from "@/data/data";

const index = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Munched - Restaurants</title>
        <meta name="description" content="Find restaurants nearby." />
      </Head>
      <AllRestaurants restaurants={props.restaurants} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const restaurants = mainJSON;

  return {
    props: {
      restaurants: restaurants,
    },
    revalidate: 600,
  };
}

export default index;
