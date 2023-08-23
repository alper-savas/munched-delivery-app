import Head from "next/head";
import React, { Fragment, useState, useEffect } from "react";
import Hero from "../components/home-page/hero";
import Categories from "../components/home-page/categories";
import Restaurants from "../components/home-page/restaurants";
import Collaborate from "../components/home-page/collaborate";
import Mobile from "@/components/home-page/mobile";
import { useDispatch } from "react-redux";
import { orderActions } from "@/context";
import { useSession } from "next-auth/react";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { data: session, status } = useSession();
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
      <Head></Head>
      <Hero />
      <Categories />
      <Restaurants />
      <Collaborate />
      <Mobile />
    </Fragment>
  );
};

export default HomePage;
