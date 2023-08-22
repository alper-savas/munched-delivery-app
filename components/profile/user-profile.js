import React, { useState, useEffect } from "react";
import classes from "./user-profile.module.css";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import spinner from "../../public/images/spinner-solid.svg";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const user = useSelector((state) => state.user);
  console.log(user);

  if (status === "loading") {
    return (
      <div className={classes.spinnerContainer}>
        <Image
          src={spinner}
          height={50}
          width={50}
          className={classes.spinner}
        ></Image>
      </div>
    );
  }

  if (status === "unauthenticated") {
    router.replace("/");
    return (
      <div className={classes.spinnerContainer}>
        <Image
          src={spinner}
          height={40}
          width={40}
          className={classes.spinner}
        ></Image>
      </div>
    );
  }

  const handleLogout = () => {
    signOut();
  };

  return (
    <div className={classes.container}>
      {user === undefined || user.length === 0 ? (
        <div className={classes.spinnerContainer}>
          <Image
            src={spinner}
            height={50}
            width={50}
            className={classes.spinner}
          ></Image>
        </div>
      ) : (
        <div>
          <h1>User Profile</h1>
          <p>{user.city}</p>
          <p>{user.street}</p>
          <button className={classes.logout} onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
