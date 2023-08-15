import React from "react";
import Grid from "../ui/grid";
import { categoryItems } from "@/data/data";

const AllCategories = () => {
  return <Grid items={categoryItems} name={"category"} />;
};

export default AllCategories;
