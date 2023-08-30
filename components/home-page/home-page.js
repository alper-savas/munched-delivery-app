import React, { Fragment } from "react";
import Hero from "./hero";
import Categories from "./categories";
import Restaurants from "./restaurants";
import Collaborate from "./collaborate";
import Mobile from "./mobile";
import { useDispatch } from "react-redux";
import { orderActions } from "@/context";
import { useSession } from "next-auth/react";

const Home = (props) => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  let user;
  if (session) {
    user = props.user.users.find((user) => {
      return user.email == session.user.email;
    });
  }
  dispatch(orderActions.setUser({ userObj: user }));

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
