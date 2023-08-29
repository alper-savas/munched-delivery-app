import React from "react";
import Grid from "../ui/grid";

const AllRestaurants = (props) => {
  return <Grid items={props.restaurants} name={"name"} />;
};

export default AllRestaurants;
