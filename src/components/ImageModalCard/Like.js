import React, { useState, useEffect } from "react";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Like.module.css";

const Like = () => {
  const [like, setLike] = useState(0);
  const [pushIcon, setPushIcon] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPushIcon(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [pushIcon]);

  const clickHandler = () => {
    setPushIcon(true);
    setLike((prev) => {
      return prev + 1;
    });
  };
  const likeClass = `${classes.icon} ${pushIcon && classes.iconPush}`;
  return (
    <div className={classes.main}>
      <p className={classes.countLike}>{like}</p>
      <span className={likeClass} onClick={clickHandler}>
        <FontAwesomeIcon icon={faThumbsUp} />
      </span>
    </div>
  );
};

export default Like;
