import React, { Fragment } from "react";
import OrderStatus from "@/components/status/order-status";
import Head from "next/head";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>Munched - Order Status</title>
      </Head>
      <OrderStatus />
    </Fragment>
  );
};

export default index;
