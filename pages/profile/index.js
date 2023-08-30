import React, { Fragment } from "react";
import UserProfile from "@/components/profile/user-profile";
import Head from "next/head";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>Munched - Profile</title>
      </Head>
      <UserProfile />
    </Fragment>
  );
};

export default index;
