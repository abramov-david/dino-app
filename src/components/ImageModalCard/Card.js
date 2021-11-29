import React, { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Card.module.css";
import Like from "./Like";
import InputForm from "./InputForm";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  return (
    <Modal closeModal={props.closeModal}>
      <div className={classes.content}>
        <FontAwesomeIcon
          icon={faTimes}
          className={classes.closeButton}
          onClick={props.closeModal}
        />
        <img src={props.imgUrl} alt="" className={classes.img} />
        <Like />
        <hr width="100%" />
        <InputForm />
      </div>
    </Modal>
  );
};

export default Card;
