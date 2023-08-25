import React, { useState, useEffect } from "react";
import classes from "./order-status.module.css";
import { useSelector } from "react-redux";
import { formatPrice } from "@/utilities/helper";
import Image from "next/image";
import checkmark from "../../public/images/checkmark-circle.svg";
import confirmed from "../../public/images/undraw_order_confirmed_re_g0if.svg";
import { generateRandomNumber } from "@/utilities/helper";

const OrderStatus = () => {
  const itemList = useSelector((state) => state.itemList);
  const fee = useSelector((state) => state.deliveryFee);
  const user = useSelector((state) => state.user);
  let totalPrice = 0;
  itemList.forEach((item) => {
    const itemPrice = item.item.price * item.quantity;
    totalPrice += itemPrice;
  });
  const randomNumber = generateRandomNumber();
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString([], {
    month: "long",
  });
  const year = date.getFullYear();

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer}>
        <Image
          src={confirmed}
          height={400}
          width={400}
          className={classes.confirmed}
        ></Image>
      </div>
      <div className={classes.status}>
        <div className={classes.headerCheck}>
          <h2 className={classes.header}>Thanks for your order</h2>
          <Image
            src={checkmark}
            className={classes.checkmark}
            height={50}
            width={50}
          ></Image>
        </div>
        <div className={classes.orderInfo}>
          <p>Order #{randomNumber}</p>
          <p>
            Placed on {month} {day}, {year}
          </p>
        </div>
        <div className={classes.price}>
          <h3 className={classes.priceName}>Address</h3>
          <p
            className={classes.total}
          >{`${user?.street} ${user?.house}, ${user?.city}`}</p>
        </div>
        <hr className={classes.hr} />
        <div className={classes.order}>
          {itemList.map((item) => {
            {
              const currPrice = formatPrice(
                +JSON.stringify(item.item.price).replaceAll(`"`, "") *
                  item.quantity
              );
              return (
                <div className={classes.item}>
                  <h3 className={classes.itemName}>
                    {JSON.stringify(item.item.name).replaceAll(`"`, "")}
                  </h3>
                  <div className={classes.priceAmount}>
                    <div className={classes.itemQuantity}>{item.quantity}x</div>
                    <p>{currPrice}€</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <hr className={classes.hr} />
        <div className={classes.price}>
          <h3 className={classes.fee}>Fee</h3>
          <p className={classes.total}>{fee}€</p>
        </div>
        <div className={classes.price}>
          <h3 className={classes.priceName}>Total</h3>
          <p className={classes.total}>
            {formatPrice((totalPrice + +fee).toString().slice(0, 5))}€
          </p>
        </div>
        <div className={classes.message}>
          <p>We're glad you ordered from us and hope you love it!</p>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
