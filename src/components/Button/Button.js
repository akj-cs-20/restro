import React from "react";
const Button = (props) => {
  return (
    <div>
      <button
        type="button"
        className={`btn btn-${props.buttonColor} btn-${props.btnSize}`}
      >
        {props.buttonName}
      </button>
    </div>
  );
};
export default Button;
