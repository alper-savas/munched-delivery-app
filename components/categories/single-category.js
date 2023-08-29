import React from "react";
import classes from "./single-category.module.css";
import Grid from "../ui/grid";
import { capitalize } from "@/utilities/helper";

const SingleCategory = (props) => {
  const { restaurants } = props;
  return (
    <div>
      <h1 className={classes.header}>{capitalize(restaurants[0].category)}</h1>
      <Grid items={restaurants} name={"name"} />
    </div>
  );
};

export default SingleCategory;
