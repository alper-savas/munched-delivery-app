import React, { useEffect, useState } from "react";
import classes from "./navigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import checkoutIcon from "../../public/images/bag-check-outline.svg";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "@/context";

const Navigation = () => {
  const router = useRouter();
  const quantity = useSelector((state) => state.totalQuantity);
  const isOpen = useSelector((state) => state.isOpen);
  const dispatch = useDispatch();
  const [animated, setAnimated] = useState(false);

  const animation = `${classes.quantity} ${animated ? classes.bump : ""}`;

  useEffect(() => {
    setAnimated(true);

    const timer = setTimeout(() => {
      setAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [quantity]);

  const handleClick = () => {
    if (isOpen) {
      dispatch(orderActions.closeCard());
    } else {
      dispatch(orderActions.openCard());
    }
  };

  return (
    <nav>
      <ul className={`${classes.navigation}`}>
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
              href="/categories"
              className={`${classes.link} ${
                router.pathname.substring(0, 11) === "/categories" &&
                classes.active
              }`}
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              href="/restaurants"
              className={`${classes.link} ${
                router.pathname.substring(0, 12) === "/restaurants" &&
                classes.active
              }`}
            >
              Restaurants
            </Link>
          </li>
        </div>
        <div className={classes.endNav}>
          <li>
            <button
              className={`${classes.button} ${
                router.pathname !== "/restaurants/[slug]" && classes.hide
              }`}
              onClick={handleClick}
            >
              <Image
                src={checkoutIcon}
                className={classes.checkout}
                alt="Checkout"
                height={24}
                width={24}
              />
              {quantity > 0 && <span className={animation}>{quantity}</span>}
            </button>
          </li>
          <div
            className={`${classes.hr} ${
              router.pathname !== "/restaurants/[slug]" && classes.hide
            }`}
          ></div>
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
      <div className={classes.gap}></div>
    </nav>
  );
};

export default Navigation;
