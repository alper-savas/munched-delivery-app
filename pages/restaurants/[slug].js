import React from "react";
import { restaurantItems } from "@/data/data";
import SingleRestaurant from "@/components/restaurants/single-restaurant";

const SelectedRestaurant = (props) => {
  const { restaurant } = props;
  return <SingleRestaurant restaurant={restaurant} />;
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const restaurant = restaurantItems.filter((i) => i.name === slug);

  return {
    props: {
      restaurant: restaurant,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  return {
    paths: restaurantItems.map((item) => ({ params: { slug: item.name } })),
    fallback: false,
  };
}

export default SelectedRestaurant;