import React from "react";
import classes from "./single-restaurant.module.css";
import Grid from "../ui/grid";

const SingleRestaurant = (props) => {
  const { restaurant } = props;
  return (
    <div>
      <h1 className={classes.header}>{restaurant[0].name}</h1>
    </div>
  );
};

export default SingleRestaurant;
