import React, { useState } from "react";
import classes from "./user-profile.module.css";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { orderActions } from "@/context";
import Grid from "../ui/grid";
import spinner from "../../public/images/spinner-solid.svg";

const UserProfile = (props) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [pageState, setPageState] = useState("info");
  const dispatch = useDispatch();
  dispatch(orderActions.setUser({ userObj: props.user }));
  const user = props.user;
  const favorites = user?.favorites;

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
          alt="Spinner"
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
          height={50}
          width={50}
          className={classes.spinner}
          alt="Spinner"
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
            alt="Spinner"
          ></Image>
        </div>
      ) : (
        <div className={classes.profileContainer}>
          <h1 className={classes.header}>Profile</h1>
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
              ) : favorites.length > 0 ? (
                <div className={classes.favContainer}>
                  <Grid items={favorites} name={"name"} />
                </div>
              ) : (
                <div className={classes.gap}>
                  <p className={classes.empty}>It's pretty empty here...</p>
                </div>
              )}
            </div>
            <div className={classes.btnContainer}>
              <button className={classes.logout} onClick={handleLogout}>
                <h3 className={classes.logoutHeader}>Logout</h3>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
