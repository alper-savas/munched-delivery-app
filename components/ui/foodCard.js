import React from "react";
import classes from "./foodCard.module.css";
import Image from "next/image";
import add from "../../public/images/add-outline.svg";
import remove from "../../public/images/remove-outline.svg";

const FoodCard = (props) => {
  const { foodInfo } = props;
  const { name, price, ingredients, url } = foodInfo;
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
        <button className={classes.button}>
          <Image src={remove} height={20} width={20} />
        </button>
        <button className={classes.button}>
          <Image src={add} height={20} width={20} />
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
