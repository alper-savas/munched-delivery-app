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
  const [pageState, setPageState] = useState("info");

  const switchInfoHandler = () => {
    setPageState("info");
  };

  const switchFavHandler = () => {
    setPageState("fav");
  };

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
        <div className={classes.profileContainer}>
          <h1 className={classes.header}>User Profile</h1>
          <div className={classes.profile}>
            <div className={classes.profileWithBtn}>
              <div className={classes.option}>
                <button
                  className={`${classes.btn} ${
                    pageState === `info` && classes.highlight
                  }`}
                  onClick={switchInfoHandler}
                >
                  User Info
                </button>
                <button
                  className={`${classes.btn} ${
                    pageState === `fav` && classes.highlight
                  }`}
                  onClick={switchFavHandler}
                >
                  Favorites
                </button>
              </div>
              {pageState === "info" ? (
                <div className={classes.userInfo}>
                  <div className={classes.user}>
                    <p className={classes.name}>Name</p>
                    <p>{user.name}</p>
                  </div>
                  <div className={classes.user}>
                    <p className={classes.name}>Email</p>
                    <p>{user.email}</p>
                  </div>
                  <div className={classes.user}>
                    <p className={classes.name}>City</p>
                    <p>{user.city}</p>
                  </div>
                  <div className={classes.user}>
                    <p className={classes.name}>Street</p>
                    <p>{user.street}</p>
                  </div>
                  <div className={classes.user}>
                    <p className={classes.name}>House Number</p>
                    <p>{user.house}</p>
                  </div>
                  <div className={classes.user}>
                    <p className={classes.name}>Post Code</p>
                    <p>{user.postcode}</p>
                  </div>
                </div>
              ) : (
                <div>Favorites</div>
              )}
            </div>
            <div className={classes.btnContainer}>
              <button className={classes.logout} onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
