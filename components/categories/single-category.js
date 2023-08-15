import React from "react";
import classes from "./single-category.module.css";
import Grid from "../ui/grid";

const SingleCategory = (props) => {
  const { restaurants } = props;
  return (
    <div>
      <h1 className={classes.header}>{restaurants[0].category}</h1>
      <Grid items={restaurants} name={"name"} />
    </div>
  );
};

export default SingleCategory;
