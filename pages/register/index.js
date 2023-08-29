import React, { Fragment } from "react";
import Register from "@/components/auth/register";
import Head from "next/head";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>Munched - Register</title>
      </Head>
      <Register />
    </Fragment>
  );
};

export default index;
