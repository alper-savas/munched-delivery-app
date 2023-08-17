import React, { useState } from "react";
import classes from "./single-restaurant.module.css";
import Image from "next/image";
import Section from "../ui/section";
import happy from "../../public/images/happy-outline.svg";
import sad from "../../public/images/sad-outline.svg";
import time from "../../public/images/time-outline.svg";
import bicycle from "../../public/images/bicycle-outline.svg";
import OrderCard from "../ui/orderCard";
import { useSelector, useDispatch } from "react-redux";
import { orderActions } from "@/context";

const SingleRestaurant = (props) => {
  const { restaurant } = props;
  const [rest] = restaurant;
  const isOpen = useSelector((state) => state.isOpen);
  const dispatch = useDispatch();

  dispatch(orderActions.setDeliveryFee({ deliveryFee: rest.fee }));

  return (
    <div>
      {isOpen && <OrderCard />}
      <div className={isOpen ? `${classes.blur}` : ""}>
        <div className={classes.upper}>
          <div className={classes.imageContainer}>
            <Image
              className={classes.image}
              src={rest.url}
              width={0}
              height={0}
              sizes="100vw"
            ></Image>
          </div>
          <div className={classes.cover}>
            <div className={classes.front}>
              <h1 className={classes.header}>{rest.name}</h1>
              <p className={classes.info}>{rest.info}</p>
            </div>
            <div className={classes.raer}>
              <p className={classes.category}>{rest.category}</p>
            </div>
          </div>
        </div>
        <div className={classes.sideInfo}>
          <div className={classes.rating}>
            {rest.rating > 70 && <Image src={happy} height={20} width={20} />}
            {rest.rating < 70 && <Image src={sad} height={20} width={20} />}
            <p>{rest.rating}</p>
          </div>
          <div className={classes.open}>
            <Image src={time} height={25} width={25}></Image>
            <p>Open until: {rest.open}</p>
          </div>
          <div className={classes.price}></div>
          {rest.price === "€" && (
            <p>
              Price: <span>€</span>
              <span className={classes.shade}>€€€€</span>
            </p>
          )}
          {rest.price === "€€" && (
            <p>
              Price: <span>€€</span>
              <span className={classes.shade}>€€€</span>
            </p>
          )}
          {rest.price === "€€€" && (
            <p>
              Price: <span>€€€</span>
              <span className={classes.shade}>€€</span>
            </p>
          )}
          {rest.price === "€€€€" && (
            <p>
              Price: <span>€€€€</span>
              <span className={classes.shade}>€</span>
            </p>
          )}
          {rest.price === "€€€€€" && (
            <p>
              Price: <span>€€€€€</span>
            </p>
          )}
          <div className={classes.free}>
            <Image src={bicycle} height={25} width={25}></Image>
            <p>{rest.fee}€</p>
          </div>
        </div>
        <div className={classes.main}>
          <div className={classes.menu}>
            {rest.menu.map((i) => {
              return <Section section={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRestaurant;
