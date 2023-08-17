import React, { useEffect, useState } from "react";
import classes from "./foodCard.module.css";
import Image from "next/image";
import add from "../../public/images/add-outline.svg";
import remove from "../../public/images/remove-outline.svg";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "@/context";

const FoodCard = (props) => {
  const { foodInfo } = props;
  const { name, price, ingredients, url } = foodInfo;
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.itemList);
  const [content, setContent] = useState(
    itemList.find((item) => item.item.name === name) !== undefined ? (
      itemList.find((item) => item.item.name === name).quantity
    ) : (
      <Image src={add} height={20} width={20} />
    )
  );

  let currentIng = "with ";
  if (ingredients !== undefined) {
    ingredients.forEach((i, index) => {
      if (index === ingredients.length - 1) {
        currentIng += i + ".";
      } else if (index == ingredients.length - 2) {
        currentIng += i + " and ";
      } else {
        currentIng += i + ", ";
      }
    });
  }

  const handleAddItem = (event) => {
    event.preventDefault();

    const item = {
      name: name,
      price: price,
      ingredients: ingredients,
      url: url,
    };

    dispatch(orderActions.addItem({ item: item }));
  };

  const handleRemoveItem = (event) => {
    event.preventDefault();

    dispatch(orderActions.removeItem({ item: name }));
  };

  const handleContentMouseEnter = () => {
    setContent(<Image src={add} height={20} width={20} />);
  };

  const handleContentMouseLeave = () => {
    setContent(
      itemList.find((item) => item.item.name === name) !== undefined &&
        itemList.find((item) => item.item.name === name).quantity
    );
  };

  return (
    <div className={classes.food}>
      <div className={classes.start}>
        <Image
          src={url}
          height={120}
          width={180}
          className={classes.image}
        ></Image>
      </div>
      <div className={classes.ingredientsContainer}>
        <h2
          className={ingredients === undefined ? classes.center : classes.name}
        >
          {name}
        </h2>
        <div className={classes.ingredients}>
          {ingredients && <p className={classes.ingredient}>{currentIng}</p>}
        </div>
      </div>
      <div className={classes.buttons}>
        <p className={classes.price}>€{price}</p>
        <button className={classes.button} onClick={handleRemoveItem}>
          <Image src={remove} height={20} width={20} />
        </button>
        <button
          className={classes.button}
          onClick={handleAddItem}
          onMouseEnter={handleContentMouseEnter}
          onMouseLeave={handleContentMouseLeave}
        >
          {content}
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
