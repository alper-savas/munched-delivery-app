import React from "react";
import Image from "next/image";
import Link from "next/link";
import classes from "./mobile.module.css";

const Mobile = () => {
  return (
    <div className={classes.mobile}>
      <div className={classes.grid}>
        <Image
          src={"/images/blob.svg"}
          height={1300}
          width={1300}
          className={classes.image}
          alt="Background image"
        ></Image>
        <div className={classes.info}>
          <h1>Download our Mobile App</h1>
        </div>
        <div>
          <div className={classes.store}>
            <Image
              src={"/images/logo-apple-appstore.svg"}
              height={40}
              width={40}
              alt="App store"
            ></Image>
            <div className={classes.stars}>
              <Image
                src={"/images/star.svg"}
                height={13}
                width={13}
                alt="Star"
              ></Image>
              <Image
                src={"/images/star.svg"}
                height={13}
                width={13}
                alt="Star"
              ></Image>
              <Image
                src={"/images/star.svg"}
                height={13}
                width={13}
                alt="Star"
              ></Image>
              <Image
                src={"/images/star.svg"}
                height={13}
                width={13}
                alt="Star"
              ></Image>
              <Image
                src={"/images/star.svg"}
                height={13}
                width={13}
                alt="Star"
              ></Image>
            </div>
            <p>4.8/5</p>
          </div>
          <div className={`${classes.store} ${classes.play}`}>
            <Image
              src={"/images/logo-google-playstore.svg"}
              height={40}
              width={40}
              alt="Play store"
            ></Image>
            <div className={classes.stars}>
              <Image
                src={"/images/star.svg"}
                height={13}
                width={13}
                alt="Star"
              ></Image>
              <Image
                src={"/images/star.svg"}
                height={13}
                width={13}
                alt="Star"
              ></Image>
              <Image
                src={"/images/star.svg"}
                height={13}
                width={13}
                alt="Star"
              ></Image>
              <Image
                src={"/images/star.svg"}
                height={13}
                width={13}
                alt="Star"
              ></Image>
              <Image
                src={"/images/star-half-outline.svg"}
                height={13}
                width={13}
                alt="Star"
              ></Image>
            </div>
            <p>4.5/5</p>
          </div>
          <div className={classes.people}>
            <div className={classes.border}>
              <Image
                src={"/images/person1.png"}
                height={35}
                width={38}
                className={classes.personImg}
                alt="Person"
              ></Image>
            </div>
            <div className={classes.border}>
              <Image
                src={"/images/person2.png"}
                height={35}
                width={38}
                className={classes.personImg}
                alt="Person"
              ></Image>
            </div>
            <div className={classes.border}>
              <Image
                src={"/images/person3.png"}
                height={35}
                width={38}
                className={classes.personImg}
                alt="Person"
              ></Image>
            </div>
            <Link href={"https://www.apple.com/app-store/"}>
              <button className={classes.button}>
                <Image
                  src={"/images/arrow-redo-outline.svg"}
                  height={25}
                  width={25}
                  alt="Share"
                ></Image>
              </button>
            </Link>
          </div>
        </div>
        <Image
          src="/images/app.svg"
          className={classes.illust}
          height={420}
          width={630}
          alt="Illustration"
        ></Image>
      </div>
    </div>
  );
};

export default Mobile;
