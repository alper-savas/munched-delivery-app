import React, { Fragment, useState } from "react";
import classes from "./hero.module.css";
import Image from "next/image";
import heroImage2 from "../../public/images/My project02.png";
import heroImage1 from "../../public/images/My project.png";
import searchIcon from "../../public/images/search-outline.svg";

const Hero = () => {
  const [searchInput, setSearchInput] = useState("");

  const handlerSearchChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

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
            height={240}
            width={130}
          ></Image>
        </div>
        <div className={classes.image02}>
          <Image
            src={heroImage2}
            alt="Ordering Food"
            height={240}
            width={170}
          ></Image>
        </div>
        <div className={classes.upper}>
          <div className={classes.motto}>
            <h1 className={classes.header}>
              The quickiest way to find the perfect bite
            </h1>
            <p className={classes.para}>
              The ultimate solution for all your delivery needs. Whether you're
              a business owner looking to expand your reach or an individual
              seeking hassle-free delivery services, Munched has you covered.
            </p>
          </div>
        </div>
        <div className={classes.lower}>
          <div className={classes.searchBar}>
            <input
              type="text"
              placeholder="Search in Munched..."
              onChange={handlerSearchChange}
              value={searchInput}
              className={classes.searchInput}
            />
            <Image
              src={searchIcon}
              className={classes.searchIcon}
              alt="Search"
              height={18}
              width={18}
            />
            <button className={classes.searchButton}>Search</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
