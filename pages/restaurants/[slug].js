import React, { Fragment } from "react";
import { mainJSON } from "@/data/data";
import SingleRestaurant from "@/components/restaurants/single-restaurant";
import { useDispatch } from "react-redux";
import { orderActions } from "@/context";
import Head from "next/head";
import { capitalize } from "@/utilities/helper";

const SelectedRestaurant = (props) => {
  const { restaurant } = props;
  const dispatch = useDispatch();
  dispatch(orderActions.clear());

  return (
    <Fragment>
      <Head>
        <title>Munched - {capitalize(restaurant[0].name)}</title>
      </Head>
      <SingleRestaurant restaurant={restaurant} />
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const restaurant = mainJSON.filter((i) => i.name === slug);

  return {
    props: {
      restaurant: restaurant,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  return {
    paths: mainJSON.map((item) => ({ params: { slug: item.name } })),
    fallback: false,
  };
}

export default SelectedRestaurant;
