import Head from "next/head";
import React, { Fragment } from "react";
import Home from "@/components/home-page/home-page";

export const HomePage = (props) => {
  return (
    <Fragment>
      <Head></Head>
      <Home data={props.data} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000//api/auth/get-users");
  const data = await response.json();

  return {
    props: {
      data: data,
    },
    revalidate: 1,
  };
}

export default HomePage;
