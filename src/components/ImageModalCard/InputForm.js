import React, { useState, useRef, useEffect } from "react";
import Input from "../UI/Input";
import TextArea from "../UI/TextArea";
import Comments from "./Comments";
import classes from "./InputForm.module.css";
import Button from "../UI/Button";

const InputForm = (props) => {
  const [userInput, setUserInput] = useState({ userName: "", userText: "" });
  const [comments, setComments] = useState([]);

  const nameInput = useRef();
  const commentText = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInput.current.value;
    const enteredText = commentText.current.value;

    setUserInput({ userName: enteredName, userText: enteredText });
  };

  useEffect(() => {
    setComments((prev) => {
      return [userInput, ...prev];
    });
  }, [userInput]);

  return (
    <div>
      <form className={classes.inputForm} onSubmit={submitHandler}>
        <div className={classes.input}>
          <Input
            ref={nameInput}
            label="Your Name"
            input={{
              id: "name",
              type: "text",
              placeholder: "Hello, what's your name?",
            }}
          />
          <TextArea
            ref={commentText}
            label="Comment Out"
            inputTextArea={{
              name: "comment",
              id: "comment",
              cols: "40",
              rows: "2",
              placeholder:
                "So sweet image, isn't it ah..? Comment out, don't be shy...",
            }}
          />
        </div>
        <Button buttonText="Leave comment" />
      </form>
      <Comments userData={comments} />
    </div>
  );
};

export default InputForm;
