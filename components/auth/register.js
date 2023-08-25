import React, { useState } from "react";
import classes from "./register.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "@/context";

const Register = () => {
  const dispatch = useDispatch();
  dispatch(orderActions.setCheckout());
  const check = useSelector((state) => state.checkout);
  console.log(check);
  return (
    <div className={classes.container}>
      <h1>Register</h1>
      <div className={classes.register}>
        <div className={classes.login}>
          <Link href="/register/login">
            <button className={classes.btn}>
              <h3 className={classes.header}>Login</h3>
            </button>
          </Link>
        </div>
        <div className={classes.manual}>
          <Link href="/register/manual">
            <button className={classes.btn}>
              <h3 className={classes.header}>Proceed Manually</h3>
            </button>
          </Link>
        </div>
        <p>Don't you have an account?</p>
        <div className={classes.signup}>
          <Link href="/register/signup">
            <button className={`${classes.btn} ${classes.signupBtn}`}>
              <h3 className={classes.header}>Sign up</h3>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
