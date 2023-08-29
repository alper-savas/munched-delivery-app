import React from "react";
import Grid from "../ui/grid";

const AllCategories = (props) => {
  return <Grid items={props.categories} name={"category"} />;
};

export default AllCategories;
