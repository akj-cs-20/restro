import React from "react";
const FancySubtitle = (props) => {
  return (
    <div className="container" id={props.id}>
      <p className="subtitle fancy">
        <span>{props.name}</span>
      </p>
    </div>
  );
};

export default FancySubtitle;
