import React, { Fragment } from "react";
import LoginForm from "@/components/auth/login-form";
import Head from "next/head";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>Munched - Login</title>
      </Head>
      <LoginForm />
    </Fragment>
  );
};

export default index;
