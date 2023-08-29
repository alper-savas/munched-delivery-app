import React, { Fragment } from "react";
import { mainJSON } from "@/data/data";
import SingleCategory from "@/components/categories/single-category";
import Head from "next/head";
import { capitalize } from "@/utilities/helper";

const SelectedCategory = (props) => {
  const { restaurants } = props;
  return (
    <Fragment>
      <Head>
        <title>Munched - {capitalize(restaurants[0].category)}</title>
      </Head>
      <SingleCategory restaurants={restaurants} />
    </Fragment>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const restaurantList = mainJSON.filter((i) => i.category === slug);

  return {
    props: {
      restaurants: restaurantList,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  return {
    paths: mainJSON.map((item) => ({ params: { slug: item.category } })),
    fallback: false,
  };
}

export default SelectedCategory;
