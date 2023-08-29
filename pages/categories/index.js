import React, { Fragment } from "react";
import AllCategories from "@/components/categories/all-categories";
import Head from "next/head";
import { categoryItems } from "@/data/data";

const index = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Munched - Categories</title>
      </Head>
      <AllCategories categories={props.categories} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const categories = categoryItems;

  return {
    props: {
      categories: categories,
    },
    revalidate: 600,
  };
}

export default index;
