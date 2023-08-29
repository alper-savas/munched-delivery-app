import React, { Fragment } from "react";
import SignupForm from "@/components/auth/signup-form";
import Head from "next/head";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>Munched - Sign up</title>
      </Head>
      <SignupForm />
    </Fragment>
  );
};

export default index;
