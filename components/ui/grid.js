import React, { useState } from "react";
import Card from "../ui/card";
import classes from "./grid.module.css";
import Image from "next/image";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import chevronBack from "../../public/images/chevron-back-sharp.svg";
import chevronForward from "../../public/images/chevron-forward-sharp.svg";

const Grid = (props) => {
  const { items, name } = props;

  const Items = ({ currentItems }) => {
    return (
      <div className={classes.grid}>
        {currentItems.map((i) => {
          return (
            <Link
              href={
                name === "category"
                  ? `/categories/${i.category}`
                  : `/restaurants/${i.name}`
              }
              className={classes.cardItem}
              key={i.id}
              onClick={handlePageClick}
            >
              <Card
                name={name === "category" ? i.category : i.name}
                url={i.url}
                places={i.numberOfPlaces}
              />
            </Link>
          );
        })}
      </div>
    );
  };

  const top = () => {
    window.scrollTo({ top: 0 });
  };

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + 12;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / 12);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 12) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={classes.pagination}>
      <Items currentItems={currentItems} />
      <ReactPaginate
        onClick={() => top()}
        className={classes.paginate}
        breakLabel="..."
        nextLabel={<Image src={chevronForward} height={20} width={20}></Image>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<Image src={chevronBack} height={20} width={20}></Image>}
        renderOnZeroPageCount={null}
        pageClassName={classes.passive}
        activeClassName={classes.active}
      />
    </div>
  );
};

export default Grid;
