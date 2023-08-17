import React from "react";
import classes from "./section.module.css";
import FoodCard from "./foodCard";
import { capitalize } from "@/utilities/helper";

const Section = (props) => {
  const { section } = props;
  const items = section[`${Object.keys(section)}`];
  const sectionName = capitalize(Object.keys(section));

  return (
    <div className={classes.section}>
      <h1>{sectionName}</h1>
      {items.map((i) => {
        return <FoodCard foodInfo={i} />;
      })}
    </div>
  );
};

export default Section;
