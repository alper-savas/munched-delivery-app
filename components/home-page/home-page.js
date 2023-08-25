import React, { Fragment } from "react";
import Hero from "./hero";
import Categories from "./categories";
import Restaurants from "./restaurants";
import Collaborate from "./collaborate";
import Mobile from "./mobile";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { orderActions } from "@/context";

const Home = (props) => {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  if (status !== "unauthenticated") {
    const user = props.data;
    const selected = user.users.find((user) => {
      return user.email == session?.user.email;
    });
    dispatch(orderActions.setUser({ userObj: selected }));
  }

  return (
    <Fragment>
      <Hero />
      <Categories />
      <Restaurants />
      <Collaborate />
      <Mobile />
    </Fragment>
  );
};

export default Home;
