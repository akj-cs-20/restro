import React from "react";
const FancySubtitle = (props) => {
  return (
    <div className="container">
      <p className="subtitle fancy">
        <span>{props.name}</span>
      </p>
    </div>
  );
};

export default FancySubtitle;
