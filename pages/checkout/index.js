import React, { Fragment } from "react";
import Checkout from "@/components/checkout/checkout";
import Head from "next/head";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>Munched - Checkout</title>
      </Head>
      <Checkout />
    </Fragment>
  );
};

export default index;
