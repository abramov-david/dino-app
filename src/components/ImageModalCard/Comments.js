import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import classes from "./Comments.module.css";

const Comments = (props) => {
  const userData = props.userData;
  const comments = userData.map((user) => {
    if (user.userName !== "" && user.userText !== "") {
      return (
        <div className={classes.comment}>
          <h3>{user.userName}</h3>
          <p className={classes.commentText}>{user.userText}</p>
        </div>
      );
    }
  });

  return <Fragment>{comments}</Fragment>;
};

export default Comments;
