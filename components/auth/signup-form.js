import React, { useState, useRef } from "react";
import classes from "./signup-form.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import spinner from "../../public/images/spinner-solid.svg";
import { isNumeric } from "@/utilities/helper";
import { signIn } from "next-auth/react";

const createUser = async (
  name,
  email,
  password,
  street,
  house,
  postcode,
  city
) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      street: street,
      house: house,
      postcode: postcode,
      city: city,
      favorites: [],
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

const SignupForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const streetRef = useRef();
  const numberRef = useRef();
  const postcodeRef = useRef();
  const cityRef = useRef();
  const noteRef = useRef();
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordIsTouched, setPasswordIsTouched] = useState(false);
  const [streetIsValid, setStreetIsValid] = useState(false);
  const [streetIsTouched, setStreetIsTouched] = useState(false);
  const [numberIsValid, setNumberIsValid] = useState(false);
  const [numberIsTouched, setNumberIsTouched] = useState(false);
  const [postcodeIsValid, setPostcodeIsValid] = useState(false);
  const [postcodeIsTouched, setPostcodeIsTouched] = useState(false);
  const [cityIsValid, setCityIsValid] = useState(false);
  const [cityIsTouched, setCityIsTouched] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const { data: session, status } = useSession();
  const checkout = useSelector((state) => state.checkout);
  const router = useRouter();
  const [authenticate, setAuthenticate] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [resMes, setResMes] = useState("");

  if (status === "loading" || status === "authenticated") {
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

  const toggleActive = () => {
    setIsActive((prevState) => !prevState);
  };

  const nameBlurHandler = (event) => {
    setNameIsTouched(true);

    if (event.target.value !== undefined) {
      if (event.target.value.trim() !== "") {
        setNameIsValid(true);
      } else {
        setNameIsValid(false);
      }
    }
  };

  const nameChangeHandler = (event) => {
    if (event.target.value !== undefined) {
      if (event.target.value.trim() !== "") {
        setNameIsValid(true);
      } else {
        setNameIsValid(false);
      }
    }
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
    if (event.target.value !== undefined) {
      if (event.target.value.trim().length > 6) {
        setPasswordIsValid(true);
      } else {
        setPasswordIsValid(false);
      }
    }
  };

  const streetBlurHandler = (event) => {
    setStreetIsTouched(true);

    if (event.target.value !== undefined) {
      if (event.target.value.trim() !== "") {
        setStreetIsValid(true);
      } else {
        setStreetIsValid(false);
      }
    }
  };

  const streetChangeHandler = (event) => {
    if (event.target.value !== undefined) {
      if (event.target.value.trim() !== "") {
        setStreetIsValid(true);
      } else {
        setStreetIsValid(false);
      }
    }
  };

  const numberBlurHandler = (event) => {
    setNumberIsTouched(true);

    if (event.target.value !== undefined) {
      if (event.target.value.trim() !== "") {
        setNumberIsValid(true);
      } else {
        setNumberIsValid(false);
      }
    }
  };

  const numberChangeHandler = (event) => {
    if (event.target.value !== undefined) {
      if (event.target.value.trim() !== "") {
        setNumberIsValid(true);
      } else {
        setNumberIsValid(false);
      }
    }
  };

  const postcodeBlurHandler = (event) => {
    setPostcodeIsTouched(true);

    if (event.target.value !== undefined) {
      if (
        event.target.value.trim().length === 5 &&
        isNumeric(event.target.value.trim())
      ) {
        setPostcodeIsValid(true);
      } else {
        setPostcodeIsValid(false);
      }
    }
  };

  const postcodeChangeHandler = (event) => {
    if (event.target.value !== undefined) {
      if (
        event.target.value.trim().length === 5 &&
        isNumeric(event.target.value.trim())
      ) {
        setPostcodeIsValid(true);
      } else {
        setPostcodeIsValid(false);
      }
    }
  };

  const cityBlurHandler = (event) => {
    setCityIsTouched(true);

    if (event.target.value !== undefined) {
      if (event.target.value.trim() !== "") {
        setCityIsValid(true);
      } else {
        setCityIsValid(false);
      }
    }
  };

  const cityChangeHandler = (event) => {
    if (event.target.value !== undefined) {
      if (event.target.value.trim() !== "") {
        setCityIsValid(true);
      } else {
        setCityIsValid(false);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoadingAuth(true);
    setAuthenticate(true);

    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredNumber = numberRef.current.value;
    const enteredPostcode = postcodeRef.current.value;
    const enteredCity = cityRef.current.value;
    const enteredNote = noteRef.current.value;

    // name
    if (enteredName !== undefined) {
      if (enteredName.trim().length === 0) {
        setNameIsValid(false);
        return;
      }
    }
    setNameIsValid(true);

    // email
    setEmailIsTouched(true);
    if (enteredEmail !== undefined) {
      if (enteredEmail.trim() === "" && !enteredEmail.includes("@")) {
        setEmailIsValid(false);
        return;
      }
    }
    setEmailIsValid(true);

    // password
    if (enteredPassword !== undefined) {
      if (enteredPassword.trim().length < 7) {
        setPasswordIsValid(false);
        return;
      }
    }
    setPasswordIsValid(true);

    // street
    if (enteredStreet !== undefined) {
      if (enteredStreet.trim().length === 0) {
        setStreetIsValid(false);
        return;
      }
    }
    setStreetIsValid(true);

    // number
    if (enteredNumber !== undefined) {
      if (enteredNumber.trim().length === 0) {
        setNumberIsValid(false);
        return;
      }
    }
    setNumberIsValid(true);

    // postcode
    if (enteredPostcode !== undefined) {
      if (
        !enteredPostcode.trim().length === 5 ||
        !isNumeric(enteredPostcode.trim())
      ) {
        setPostcodeIsValid(false);
        return;
      }
    }
    setPostcodeIsValid(true);

    // city
    if (enteredCity !== undefined) {
      if (enteredCity.trim().length === 0) {
        setCityIsValid(false);
        return;
      }
    }
    setCityIsValid(true);

    try {
      const result = await createUser(
        enteredName,
        enteredEmail,
        enteredPassword,
        enteredStreet,
        enteredNumber,
        enteredPostcode,
        enteredCity
      );
      if (!result.ok) {
        setAuthenticate(false);
        setResMes(result.message);
        setLoadingAuth(false);
      }
      setResMes(result.message);
      setLoadingAuth(false);

      const signin = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
        enteredStreet: enteredStreet,
        enteredNumber: enteredNumber,
        enteredPostcode: enteredPostcode,
        enteredCity: enteredCity,
      });
      if (signin.ok === true) {
        if (checkout) {
          router.replace("/checkout");
        } else {
          router.replace("/");
        }
      }
    } catch (error) {
      setAuthenticate(false);
      setResMes(error.message);
      setLoadingAuth(false);
    }
  };

  const isValid =
    (!nameIsValid && nameIsTouched) ||
    (!emailIsValid && emailIsTouched) ||
    (!passwordIsValid && passwordIsTouched) ||
    (!streetIsValid && streetIsTouched) ||
    (!numberIsValid && numberIsTouched) ||
    (!cityIsValid && cityIsTouched) ||
    (!postcodeIsValid && postcodeIsTouched);

  return (
    <div className={classes.auth}>
      <h1 className={classes.header}>Signup</h1>
      <form onSubmit={handleSubmit} className={classes.formContainer}>
        <div className={classes.allForm}>
          <div className={classes.deliveryAddress}>
            <h2>Delivery Address</h2>
            <div className={classes.address}>
              <div className={classes.street}>
                <input
                  type="text"
                  id="street"
                  ref={streetRef}
                  placeholder="Street Name"
                  className={`${classes.formBox} ${
                    !streetIsValid && streetIsTouched && classes.invalidBox
                  }`}
                  onBlur={streetBlurHandler}
                  onChange={streetChangeHandler}
                  required
                />
                {!streetIsValid && streetIsTouched && (
                  <p className={classes.invalid}>
                    Street name can not be empty
                  </p>
                )}
              </div>
              <div className={classes.number}>
                <input
                  maxLength={5}
                  type="text"
                  id="number"
                  ref={numberRef}
                  placeholder="House Number"
                  className={`${classes.formBox} ${
                    !numberIsValid && numberIsTouched && classes.invalidBox
                  }`}
                  onBlur={numberBlurHandler}
                  onChange={numberChangeHandler}
                  required
                />
                {!numberIsValid && numberIsTouched && (
                  <p className={classes.invalid}>
                    House number can not be empty
                  </p>
                )}
              </div>
              <div className={classes.postcode}>
                <input
                  type="text"
                  id="postcode"
                  ref={postcodeRef}
                  placeholder="Post Code"
                  className={`${classes.formBox} ${
                    !postcodeIsValid && postcodeIsTouched && classes.invalidBox
                  }`}
                  onBlur={postcodeBlurHandler}
                  onChange={postcodeChangeHandler}
                  required
                />
                {!postcodeIsValid && postcodeIsTouched && (
                  <p className={classes.invalid}>
                    Post code length should be 5 digits and it's value should be
                    numeric
                  </p>
                )}
              </div>
              <div className={classes.city}>
                <input
                  type="text"
                  id="city"
                  ref={cityRef}
                  placeholder="City"
                  className={`${classes.formBox} ${
                    !cityIsValid && cityIsTouched && classes.invalidBox
                  }`}
                  onBlur={cityBlurHandler}
                  onChange={cityChangeHandler}
                  required
                />
                {!cityIsValid && cityIsTouched && (
                  <p className={classes.invalid}>City name can not be empty</p>
                )}
              </div>
              <div className={classes.note}>
                <input
                  type="text"
                  id="note"
                  ref={noteRef}
                  placeholder="Note (optional)"
                  className={classes.formBox}
                />
              </div>
            </div>
          </div>
          <h2>Personal Information</h2>
          <div className={classes.personalInfo}>
            <div className={classes.name}>
              <input
                type="text"
                id="name"
                ref={nameRef}
                placeholder="Name"
                className={`${classes.formBox} ${
                  !nameIsValid && nameIsTouched && classes.invalidBox
                }`}
                onBlur={nameBlurHandler}
                onChange={nameChangeHandler}
                required
              />
              {!nameIsValid && nameIsTouched && (
                <p className={classes.invalid}>Name can not be empty</p>
              )}
            </div>
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
                <p className={classes.invalid}>
                  Email can not be empty and must include "@"
                </p>
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
            </div>
          </div>
        </div>
        <div className={classes.feedback}>
          {!authenticate && <p className={classes.invalidUser}>{resMes}</p>}
          {loadingAuth && (
            <div className={classes.spinnerContainerAuth}>
              <Image
                src={spinner}
                height={40}
                width={40}
                className={classes.spinner}
                alt="Spinner"
              ></Image>
            </div>
          )}
        </div>
        <div className={classes.buttons}>
          <button
            className={`${classes.mainButton} ${isValid && classes.block}`}
          >
            Signup
          </button>
          <Link
            href={"/register/login"}
            className={`${classes.changeMode} ${
              isActive ? classes.active : ""
            }`}
            onMouseEnter={toggleActive}
            onMouseLeave={toggleActive}
          >
            Login with existing account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
