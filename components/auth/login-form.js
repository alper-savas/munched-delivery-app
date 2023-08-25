import React, { useState, useRef } from "react";
import classes from "./login-form.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import spinner from "../../public/images/spinner-solid.svg";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isActive, setIsActive] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  const checkout = useSelector((state) => state.checkout);

  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);
  const [authenticate, setAuthenticate] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);

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

  if (status === "authenticated") {
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

  const toggleActive = () => {
    setIsActive((prevState) => !prevState);
  };

  const emailBlurHandler = (event) => {
    setEmailIsTouched(true);

    if (event.target.value !== undefined) {
      if (
        event.target.value.trim() !== "" &&
        event.target.value.includes("@")
      ) {
        setEmailIsValid(true);
      } else {
        setEmailIsValid(false);
      }
    }
  };

  const emailChangeHandler = (event) => {
    setAuthenticate(true);
    if (event.target.value !== undefined) {
      if (
        event.target.value.trim() !== "" &&
        event.target.value.includes("@")
      ) {
        setEmailIsValid(true);
      } else {
        setEmailIsValid(false);
      }
    }
  };

  const passwordBlurHandler = (event) => {
    setPasswordIsTouched(true);

    if (event.target.value !== undefined) {
      if (event.target.value.trim().length > 6) {
        setPasswordIsValid(true);
      } else {
        setPasswordIsValid(false);
      }
    }
  };

  const passwordChangeHandler = (event) => {
    setAuthenticate(true);
    if (event.target.value !== undefined) {
      if (event.target.value.trim().length > 6) {
        setPasswordIsValid(true);
      } else {
        setPasswordIsValid(false);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoadingAuth(true);
    setAuthenticate(true);

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    // add Validation
    setEmailIsTouched(true);
    if (enteredEmail !== undefined) {
      if (enteredEmail.trim() === "" && !enteredEmail.includes("@")) {
        setEmailIsValid(false);
        return;
      }
    }
    setEmailIsValid(true);

    if (enteredPassword !== undefined) {
      if (enteredPassword.trim().length < 7) {
        setPasswordIsValid(false);
        return;
      }
    }
    setPasswordIsValid(true);

    const result = await signIn("credentials", {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    });
    if (checkout) {
      router.replace("/checkout");
    } else {
      router.replace("/");
    }

    if (!result.ok) {
      setAuthenticate(false);
    }
    setLoadingAuth(false);
  };

  return (
    <div className={classes.auth}>
      <form onSubmit={handleSubmit} className={classes.formContainer}>
        <h1>Login</h1>
        <div className={classes.email}>
          <input
            type="email"
            id="email"
            ref={emailRef}
            placeholder="Email"
            className={`${classes.formBox} ${
              !emailIsValid && emailIsTouched && classes.invalidBox
            }`}
            onBlur={emailBlurHandler}
            onChange={emailChangeHandler}
            required
          />
          {!emailIsValid && emailIsTouched && (
            <p className={classes.invalid}>Email must include "@"</p>
          )}
        </div>
        <div className={classes.password}>
          <input
            type="password"
            id="password"
            ref={passwordRef}
            placeholder="Password"
            className={`${classes.formBox} ${
              !passwordIsValid && passwordIsTouched && classes.invalidBox
            }`}
            onBlur={passwordBlurHandler}
            onChange={passwordChangeHandler}
            required
          />
          {!passwordIsValid && passwordIsTouched && (
            <p className={classes.invalid}>
              Password must be at least 7 characters long
            </p>
          )}
          {!authenticate && (
            <p className={classes.invalid}>Wrong email or password</p>
          )}
          {loadingAuth && (
            <div className={classes.spinnerContainerAuth}>
              <Image
                src={spinner}
                height={40}
                width={40}
                className={classes.spinner}
              ></Image>
            </div>
          )}
        </div>
        <div className={classes.buttons}>
          <button
            className={`${classes.mainButton} ${
              ((!emailIsValid && emailIsTouched) ||
                (!passwordIsValid && passwordIsTouched)) &&
              classes.block
            }`}
          >
            Login
          </button>
          <Link
            href={"/register/signup"}
            className={`${classes.changeMode} ${
              isActive ? classes.active : ""
            }`}
            onMouseEnter={toggleActive}
            onMouseLeave={toggleActive}
          >
            Create new account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
