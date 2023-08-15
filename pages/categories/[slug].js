import React from "react";
import { restaurantItems } from "@/data/data";
import SingleCategory from "@/components/categories/single-category";

const SelectedCategory = (props) => {
  const { restaurants } = props;
  return <SingleCategory restaurants={restaurants} />;
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const restaurantList = restaurantItems.filter((i) => i.category === slug);

  return {
    props: {
      restaurants: restaurantList,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  return {
    paths: restaurantItems.map((item) => ({ params: { slug: item.category } })),
    fallback: false,
  };
}

export default SelectedCategory;
