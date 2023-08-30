import React, { Fragment, useState, useEffect } from "react";
import classes from "./home-page.module.css";
import Hero from "./hero";
import Categories from "./categories";
import Restaurants from "./restaurants";
import Collaborate from "./collaborate";
import Mobile from "./mobile";
import { useDispatch } from "react-redux";
import { orderActions } from "@/context";
import { useSession } from "next-auth/react";

const Home = (props) => {
  const { data: session, status } = useSession();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState();

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("/api/auth/get-users");
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      setUserData(data);
      if (userData?.users) {
        const selected = userData.users.find((user) => {
          return user.email == session.user.email;
        });
        dispatch(orderActions.setUser({ userObj: selected }));
      }
    };
    if (status === "authenticated") {
      getUsers();
    }
  }, [userData]);

  return (
    <Fragment>
      <div>
        <Hero />
        <Categories categories={props.categories} />
        <Restaurants restaurants={props.restaurants} />
        <Collaborate />
        <Mobile />
      </div>
    </Fragment>
  );
};

export default Home;
