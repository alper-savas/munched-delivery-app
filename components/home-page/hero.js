import React, { Fragment } from "react";
import classes from "./hero.module.css";
import Image from "next/image";
import heroImage2 from "../../public/images/My project02.png";
import heroImage1 from "../../public/images/My project.png";

const Hero = () => {
  return (
    <Fragment>
      <div className={classes.hero}>
        <div className={classes.bigdot}></div>
        <div className={classes.biggestdot}></div>
        <div className={classes.normaldot}></div>
        <div className={classes.smalldot}></div>
        <div className={classes.normalcircle}></div>
        <div className={classes.yellowdot}></div>
        <div className={classes.image01}>
          <Image
            src={heroImage1}
            alt="Ordering Food"
            height={220}
            width={120}
          ></Image>
        </div>
        <div className={classes.image02}>
          <Image
            src={heroImage2}
            alt="Ordering Food"
            height={220}
            width={160}
          ></Image>
        </div>
        <div className={classes.upper}>
          <div className={classes.motto}>
            <h1 className={classes.header}>
              The quickiest way to find the perfect bite
            </h1>
            <p className={classes.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
        <div className={classes.lower}></div>
      </div>
    </Fragment>
  );
};

export default Hero;
