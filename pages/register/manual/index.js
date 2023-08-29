import React, { Fragment } from "react";
import ManualForm from "@/components/auth/manual-form";
import Head from "next/head";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>Munched - Address Form</title>
      </Head>
      <ManualForm />
    </Fragment>
  );
};

export default index;
