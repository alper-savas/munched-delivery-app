import React, { useEffect, useState } from "react";
import classes from "./single-restaurant.module.css";
import Image from "next/image";
import Section from "../ui/section";
import happy from "../../public/images/happy-outline.svg";
import sad from "../../public/images/sad-outline.svg";
import time from "../../public/images/time-outline.svg";
import bicycle from "../../public/images/bicycle-outline.svg";
import fav from "../../public/images/heart.svg";
import unfav from "../../public/images/heart-outline.svg";
import OrderCard from "../ui/orderCard";
import { useSelector, useDispatch } from "react-redux";
import { orderActions } from "@/context";
import { useSession } from "next-auth/react";
import { capitalize } from "@/utilities/helper";

const addRestaurant = async (email, rest) => {
  const response = await fetch("/api/favorites/favorites", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      restObj: {
        id: rest.id,
        name: rest.name,
        category: rest.category,
        rating: rest.rating,
        open: rest.open,
        price: rest.price,
        url: rest.url,
        info: rest.info,
        fee: rest.fee,
      },
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

const SingleRestaurant = (props) => {
  const { restaurant } = props;
  const [rest] = restaurant;
  const isOpen = useSelector((state) => state.isOpen);
  const user = useSelector((state) => state.user);
  const email = user?.email;
  const favorites = user?.favorites;
  const { data: status, session } = useSession();
  const dispatch = useDispatch();
  const [restExists, setRestExists] = useState(
    favorites?.find((fav) => fav.name === rest.name)
  );

  dispatch(orderActions.setDeliveryFee({ deliveryFee: rest.fee }));

  const addFavHandler = async () => {
    setRestExists((prevState) => !prevState);
    const result = await addRestaurant(email, rest);
  };

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
              alt="Restaurant Image"
            ></Image>
          </div>
          <div className={`${classes.cover} ${isOpen && classes.translateY}`}>
            <div className={classes.front}>
              <h1 className={classes.header}>{capitalize(rest.name)}</h1>
              <p className={classes.info}>{capitalize(rest.info)}</p>
            </div>
            <div className={classes.raer}>
              <p className={classes.category}>{capitalize(rest.category)}</p>
            </div>
          </div>
        </div>
        <div className={classes.infoBarContainer}>
          <div className={classes.infoBar}>
            <div className={classes.sideInfo}>
              <div className={classes.rating}>
                {rest.rating > 70 && (
                  <Image src={happy} height={20} width={20} alt="High rated" />
                )}
                {rest.rating < 70 && (
                  <Image src={sad} height={20} width={20} alt="Low rated" />
                )}
                <p>{rest.rating}</p>
              </div>
              <div className={classes.open}>
                <Image
                  src={time}
                  height={25}
                  width={25}
                  alt="Open until"
                ></Image>
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
                <Image
                  src={bicycle}
                  height={25}
                  width={25}
                  alt="Courier"
                ></Image>
                <p>{rest.fee}€</p>
              </div>
            </div>
            {status !== null && status !== "unauthenticated" && (
              <div className={classes.fav}>
                <button className={classes.favBtn} onClick={addFavHandler}>
                  {restExists ? (
                    <Image
                      src={fav}
                      width={30}
                      height={30}
                      alt="Favorite"
                    ></Image>
                  ) : (
                    <Image
                      src={unfav}
                      width={30}
                      height={30}
                      alt="Unfavorite"
                    ></Image>
                  )}
                </button>
              </div>
            )}
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
