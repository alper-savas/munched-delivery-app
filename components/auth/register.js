import React from "react";
import classes from "./register.module.css";
import Link from "next/link";

const Register = () => {
  return (
    <div className={classes.container}>
      <h1>Register</h1>
      <div className={classes.register}>
        <div className={classes.login}>
          <Link href="/register/login">
            <button className={classes.btn}>Login</button>
          </Link>
        </div>
        <div className={classes.manual}>
          <Link href="/register/manual">
            <button className={classes.btn}>Proceed Manually</button>
          </Link>
        </div>
        <p>Don't you have an account?</p>
        <div className={classes.signup}>
          <Link href="/register/signup">
            <button className={`${classes.btn} ${classes.signupBtn}`}>
              Signup
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
