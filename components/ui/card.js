import React, { Fragment } from "react";
import Image from "next/image";
import classes from "./card.module.css";

const Card = (props) => {
  const { name, url, places } = props;

  return (
    <div className={classes.frag}>
      <div className={classes.card}>
        <div className={classes.imageLayout}>
          <Image
            src={url}
            height={200}
            width={300}
            className={classes.image}
          ></Image>
        </div>
        <p className={!places && `${classes.name}`}>{name}</p>
        {places && <p className={classes.light}>{places} places</p>}
      </div>
    </div>
  );
};

export default Card;
