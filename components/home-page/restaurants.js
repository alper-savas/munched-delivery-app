import React, { Fragment } from "react";
import classes from "./restaurants.module.css";
import Link from "next/link";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../ui/card";
import { responsive } from "../../data/data";
import ChevronLeft from "../../public/images/chevron-back-sharp.svg";
import ChevronRight from "../../public/images/chevron-forward-sharp.svg";

const ButtonGroup = ({ next, previous }) => {
  return (
    <div className={classes.buttonGroup}>
      <button className={classes.chevronLeft} onClick={() => previous()}>
        <Image src={ChevronLeft} height={40} width={40} alt="Chevron"></Image>
      </button>
      <button className={classes.chevronRight} onClick={() => next()}>
        <Image src={ChevronRight} height={40} width={40} alt="Chevron"></Image>
      </button>
    </div>
  );
};

const Restaurants = (props) => {
  return (
    <Fragment>
      <div className={classes.mainHeader}>
        <h2 className={classes.header}>Restaurants</h2>
        <Link href={"/restaurants"} className={classes.seeAllLink}>
          <button className={classes.seeAll}>See all</button>
        </Link>
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        className={classes.carousel}
        arrows={false}
        customButtonGroup={<ButtonGroup />}
        renderButtonGroupOutside={true}
      >
        {props.restaurants.map((i) => {
          return (
            <Link
              href={`/restaurants/${i.name}`}
              className={classes.carouselItem}
              key={i.id}
            >
              <Card name={i.name} url={i.url} />
            </Link>
          );
        })}
      </Carousel>
    </Fragment>
  );
};

export default Restaurants;
