import React, { Fragment } from "react";
import Hero from "./hero";
import Categories from "./categories";
import Restaurants from "./restaurants";
import Collaborate from "./collaborate";
import Mobile from "./mobile";
import { useDispatch } from "react-redux";
import { orderActions } from "@/context";

const Home = (props) => {
  const dispatch = useDispatch();
  dispatch(orderActions.setUser({ userObj: props.user }));

  return (
    <Fragment>
      <Hero />
      <Categories categories={props.categories} />
      <Restaurants restaurants={props.restaurants} />
      <Collaborate />
      <Mobile />
    </Fragment>
  );
};

export default Home;
