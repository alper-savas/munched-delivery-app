import React, { Fragment } from "react";
import UserProfile from "@/components/profile/user-profile";
import Head from "next/head";

const index = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Munched - Profile</title>
      </Head>
      <UserProfile user={props.data} />
    </Fragment>
  );
};

export async function getServerSideProps() {
  // const response = await fetch("http://localhost:3000/api/auth/get-users");
  const response = await axios.get(`http://localhost:3000/api/auth/get-users`);
  const data = response.data;

  return {
    props: {
      data: data,
    },
  };
}

export default index;
