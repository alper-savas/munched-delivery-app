import React, { Fragment } from "react";
import classes from "./categories.module.css";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../ui/card";
import { responsive } from "../../data/data";
import Image from "next/image";
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

const Categories = (props) => {
  return (
    <Fragment>
      <div className={classes.catagories}>
        <div className={classes.mainHeader}>
          <h2 className={classes.header}>Categories</h2>
          <Link href={"/categories"} className={classes.seeAllLink}>
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
          {props.categories.map((i) => {
            return (
              <Link
                href={`/categories/${i.category}`}
                className={classes.carouselItem}
                key={i.id}
              >
                <Card name={i.category} url={i.url} places={i.numberOfPlaces} />
              </Link>
            );
          })}
        </Carousel>
      </div>
    </Fragment>
  );
};

export default Categories;
