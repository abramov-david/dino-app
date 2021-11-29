import React from "react";
import loading from "../assets/loading.png";
import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={classes.main}>
      <img className={classes.img} src={loading} alt="" />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
