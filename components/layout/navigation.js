import React from "react";
import classes from "./navigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import checkoutIcon from "../../public/images/bag-check-outline.svg";

const Navigation = () => {
  const router = useRouter();

  return (
    <nav>
      <ul className={classes.navigation}>
        <div className={classes.smalldot}></div>
        <div className={classes.logo}>
          <li>
            <Link href="/" className={classes.link}>
              MUNCHED
            </Link>
            <Link href="/">
              <span className={`${classes.dot} ${classes.yel}`}></span>
            </Link>
          </li>
        </div>
        <div className={classes.midNav}>
          <li>
            <Link
              href="/"
              className={`${classes.link} ${
                router.pathname === "/" && classes.active
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={`${classes.link} ${
                router.pathname === "/categories" && classes.active
              }`}
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={`${classes.link} ${
                router.pathname === "/restaurants" && classes.active
              }`}
            >
              Restaurants
            </Link>
          </li>
        </div>
        <div className={classes.endNav}>
          <li>
            <Link href="/" className={classes.link}>
              <Image
                src={checkoutIcon}
                className={classes.checkout}
                alt="Checkout"
                height={22}
                width={22}
              />
            </Link>
          </li>
          <div className={classes.hr}></div>
          <li>
            <Link href="/" className={classes.link}>
              Log in
            </Link>
          </li>
          <li>
            <button className={classes.signupBtn}>
              <Link href="/" className={`${classes.link} ${classes.signup}`}>
                Sign up
              </Link>
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
