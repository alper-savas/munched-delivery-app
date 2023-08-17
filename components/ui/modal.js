import React, { Fragment } from "react";
import classes from "./modal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { orderActions } from "@/context";

const Backdrop = () => {
  const isOpen = useSelector((state) => state.isOpen);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (isOpen) {
      dispatch(orderActions.closeCard());
    } else {
      dispatch(orderActions.openCard());
    }
  };

  return <div className={classes.backdrop} onClick={handleClick} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay>,
    </Fragment>
  );
};

export default Modal;
