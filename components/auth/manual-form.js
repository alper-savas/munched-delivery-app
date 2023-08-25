import React, { useState, useRef } from "react";
import classes from "./manual-form.module.css";
import { isNumeric } from "@/utilities/helper";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "@/context";
import { useRouter } from "next/router";

const ManualForm = () => {
  const nameRef = useRef();
  const streetRef = useRef();
  const numberRef = useRef();
  const postcodeRef = useRef();
  const cityRef = useRef();
  const emailRef = useRef();
  const noteRef = useRef();
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [streetIsValid, setStreetIsValid] = useState(false);
  const [streetIsTouched, setStreetIsTouched] = useState(false);
  const [numberIsValid, setNumberIsValid] = useState(false);
  const [numberIsTouched, setNumberIsTouched] = useState(false);
  const [postcodeIsValid, setPostcodeIsValid] = useState(false);
  const [postcodeIsTouched, setPostcodeIsTouched] = useState(false);
  const [cityIsValid, setCityIsValid] = useState(false);
  const [cityIsTouched, setCityIsTouched] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

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

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;
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
    if (enteredEmail !== undefined) {
      if (enteredEmail.trim().length === 0) {
        setEmailIsValid(false);
        return;
      }
    }
    setEmailIsValid(true);

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

    const user = {
      name: enteredName,
      email: enteredEmail,
      street: enteredStreet,
      number: enteredNumber,
      postcode: enteredPostcode,
      city: enteredCity,
    };
    dispatch(orderActions.setUser({ userObj: user }));
    router.replace("/checkout");
  };

  const isValid =
    (!nameIsValid && nameIsTouched) ||
    (!emailIsValid && emailIsTouched) ||
    (!streetIsValid && streetIsTouched) ||
    (!numberIsValid && numberIsTouched) ||
    (!cityIsValid && cityIsTouched) ||
    (!postcodeIsValid && postcodeIsTouched);

  return (
    <div className={classes.auth}>
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
            <div className={classes.name}>
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
          </div>
        </div>
        <div className={classes.buttons}>
          <button
            className={`${classes.mainButton} ${isValid && classes.block}`}
          >
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManualForm;
