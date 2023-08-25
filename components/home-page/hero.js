import React, { Fragment, useState, useEffect } from "react";
import classes from "./hero.module.css";
import Image from "next/image";
import heroImage2 from "../../public/images/My project02.png";
import heroImage1 from "../../public/images/My project.png";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { restaurantItems } from "@/data/data";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  const restaurants = restaurantItems.map((restaurant) => {
    return { id: restaurant.id, name: restaurant.name, url: restaurant.url };
  });

  const formatResult = (item) => {
    return (
      <div className={classes.searchItemDiv}>
        <Image src={item.url} height={60} width={90}></Image>
        <p className={classes.searchItem}>{item.name}</p>
      </div>
    );
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
            <ReactSearchAutocomplete
              items={restaurants}
              onSelect={(item) => router.replace(`/restaurants/${item.name}`)}
              formatResult={formatResult}
              className={classes.searchInput}
              styling={{
                fontSize: 2,
                iconColor: "black",
                borderRadius: "12px",
              }}
              placeholder="Search in Munched..."
              fuseOptions={{ threshold: 0 }}
              showIcon={false}
              maxResults={3}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
