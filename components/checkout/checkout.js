import React, { Fragment, useState, useEffect } from "react";
import classes from "./checkout.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { orderActions } from "@/context";
import { useSession } from "next-auth/react";
import { formatPrice } from "@/utilities/helper";
import spinner from "../../public/images/spinner-solid.svg";
import Image from "next/image";

const Checkout = () => {
  const dispatch = useDispatch();
  const { data: session, status } = useSession();
  const user = useSelector((state) => state.user);
  const [userData, setUserData] = useState();
  const itemList = useSelector((state) => state.itemList);
  const fee = useSelector((state) => state.deliveryFee);
  let totalPrice = 0;
  itemList.forEach((item) => {
    const itemPrice = item.item.price * item.quantity;
    totalPrice += itemPrice;
  });
  const router = useRouter();

  const confirmOrderHandler = () => {
    router.replace("/status");
  };
  dispatch(orderActions.unsetCheckout());

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("/api/auth/get-users");
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      setUserData(data);
      if (userData?.users) {
        const selected = userData.users.find((user) => {
          return user.email == session.user.email;
        });
        dispatch(orderActions.setUser({ userObj: selected }));
      }
    };
    if (status === "authenticated") {
      getUsers();
    }
  }, [userData]);

  return (
    <Fragment>
      {user === undefined || user.length === 0 ? (
        <div className={classes.spinnerContainer}>
          <Image
            src={spinner}
            height={50}
            width={50}
            className={classes.spinner}
            alt="Spinner"
          ></Image>
        </div>
      ) : (
        <div className={classes.checkout}>
          <h3 className={classes.header}>Your order, {user.name}</h3>
          <div>
            <div className={classes.order}>
              <div className={classes.container}>
                <div className={classes.content}>
                  {itemList.map((item) => {
                    {
                      const currPrice = formatPrice(
                        +JSON.stringify(item.item.price).replaceAll(`"`, "") *
                          item.quantity
                      );
                      return (
                        <div className={classes.singleItem}>
                          <Image
                            src={item.item.url}
                            height={90}
                            width={135}
                            alt={`${item.item.name} image`}
                          ></Image>
                          <div className={classes.itemAmount}>
                            <div className={classes.itemQuantity}>
                              {item.quantity}x
                            </div>
                            <h3 className={classes.item}>
                              {JSON.stringify(item.item.name).replaceAll(
                                `"`,
                                ""
                              )}
                            </h3>
                          </div>
                          <p className={classes.price}>{currPrice}€</p>
                        </div>
                      );
                    }
                  })}
                  <div className={classes.allPrice}>
                    <div className={classes.subtotal}>
                      <h4 className={classes.price}>Subtotal</h4>
                      <p className={classes.price}>
                        {formatPrice(totalPrice)}€
                      </p>
                    </div>
                    <div className={classes.subtotal}>
                      <h4 className={classes.price}>Delivery Fee</h4>
                      <p className={classes.price}>{formatPrice(fee)}€</p>
                    </div>
                    <div className={classes.subtotal}>
                      <h4 className={classes.total}>Total</h4>
                      <p className={classes.total}>
                        {formatPrice(
                          (totalPrice + +fee).toString().slice(0, 5)
                        )}
                        €
                      </p>
                    </div>
                  </div>
                </div>
                <div className={classes.confirm}>
                  <button
                    onClick={confirmOrderHandler}
                    className={classes.confirmBtn}
                  >
                    <h3 className={classes.confirmHeader}>Confirm Order</h3>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Checkout;
