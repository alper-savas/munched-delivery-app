import Head from "next/head";
import React, { Fragment } from "react";
import Home from "@/components/home-page/home-page";
import { getServerSession } from "next-auth/next";
import { useSession } from "next-auth/react";
import { authOptions } from "./api/auth/[...nextauth]";
import { mainJSON, categoryItems } from "@/data/data";

export const HomePage = (props) => {
  const { data: session } = useSession();
  let user;
  if (session) {
    user = props.data.users.find((user) => {
      return user.email == session?.user.email;
    });
  }

  return (
    <Fragment>
      <Head>
        <title>Munched - Delivery App</title>
        <meta
          name="description"
          content="Delivery app to order food from restaurants nearby."
        />
      </Head>
      <Home
        user={user}
        restaurants={props.restaurants}
        categories={props.categories}
      />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:3000//api/auth/get-users");
  const data = await response.json();
  const categories = categoryItems;
  const restaurants = mainJSON;

  return {
    props: {
      data: data,
      session: await getServerSession(context.req, context.res, authOptions),
      categories: categories,
      restaurants: restaurants,
    },
  };
}

export default HomePage;
