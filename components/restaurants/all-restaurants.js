import React from "react";
import Grid from "../ui/grid";
import { restaurantItems } from "@/data/data";

const AllRestaurants = () => {
  return <Grid items={restaurantItems} name={"name"} />;
};

export default AllRestaurants;
