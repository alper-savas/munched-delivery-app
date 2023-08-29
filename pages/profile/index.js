import React, { Fragment } from "react";
import UserProfile from "@/components/profile/user-profile";
import Head from "next/head";
import { getServerSession } from "next-auth/next";
import { useSession } from "next-auth/react";

const index = (props) => {
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
        <title>Munched - Profile</title>
      </Head>
      <UserProfile user={user} />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:3000//api/auth/get-users");
  const data = await response.json();

  return {
    props: {
      data: data,
      session: await getServerSession(context.req, context.res),
    },
  };
}

export default index;
