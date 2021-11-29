import React from "react";
import classes from "./TextArea.module.css";

const TextArea = React.forwardRef((props, ref) => {
  ///Forward Ref allow to use 'ref' in reusable component <textarea/>
  return (
    <div className={classes.inputTextArea}>
      <label htmlFor={props.inputTextArea.id}>{props.label}</label>
      <textarea
        ref={ref}
        {...props.inputTextArea}
        required
        onChange={props.onCahnge}
      />
    </div>
  );
});

export default TextArea;
