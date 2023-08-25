import React from "react";
import Modal from "./modal";
import classes from "./orderCard.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "@/context";
import close from "../../public/images/close-outline.svg";
import { formatPrice } from "@/utilities/helper";
import Link from "next/link";
import { useSession } from "next-auth/react";

const OrderCard = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.isOpen);
  const itemList = useSelector((state) => state.itemList);
  const fee = useSelector((state) => state.deliveryFee);
  let totalPrice = 0;
  itemList.forEach((item) => {
    const itemPrice = item.item.price * item.quantity;
    totalPrice += itemPrice;
  });
  const { data: session, status } = useSession();

  const handleClick = () => {
    if (isOpen) {
      dispatch(orderActions.closeCard());
    } else {
      dispatch(orderActions.openCard());
    }
    dispatch(orderActions.setCheckout());
  };

  return (
    <Modal>
      <div className={classes.order}>
        <button className={classes.button} onClick={handleClick}>
          <Image src={close} width={50} height={50} />
        </button>
        {itemList.length === 0 ? (
          <h1 className={classes.empty}>It's pretty empty here...</h1>
        ) : (
          <div className={classes.container}>
            <div className={classes.content}>
              <h1 className={classes.header}>Order Summary</h1>
              {itemList.map((item) => {
                {
                  const currPrice = formatPrice(
                    +JSON.stringify(item.item.price).replaceAll(`"`, "") *
                      item.quantity
                  );
                  return (
                    <div className={classes.singleItem}>
                      <div className={classes.itemQuantity}>
                        {item.quantity}x
                      </div>
                      <h1 className={item}>
                        {JSON.stringify(item.item.name).replaceAll(`"`, "")}
                      </h1>
                      <p className={classes.price}>{currPrice}€</p>
                    </div>
                  );
                }
              })}
              <hr />
              <div className={classes.allPrice}>
                <div className={classes.subtotal}>
                  <p className={classes.price}>Subtotal</p>
                  <p className={classes.price}>{formatPrice(totalPrice)}€</p>
                </div>
                <div className={classes.subtotal}>
                  <p className={classes.price}>Delivery Fee</p>
                  <p className={classes.price}>{formatPrice(fee)}€</p>
                </div>
                <div className={classes.subtotal}>
                  <p className={classes.total}>Total</p>
                  <p className={classes.total}>
                    {formatPrice((totalPrice + +fee).toString().slice(0, 5))}€
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.finish}>
              <Link
                href={`${
                  status === `authenticated` ? `/checkout` : `/register`
                }`}
              >
                <button className={classes.checkout} onClick={handleClick}>
                  <h3 className={classes.checkoutHeader}>
                    Checkout ({(totalPrice + +fee).toString().slice(0, 5)}€)
                  </h3>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default OrderCard;
