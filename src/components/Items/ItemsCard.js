import React from "react";

const ItemsCard = (props) => {
  return (
    <div id="items">
      {/* card */}
      <div className="card z-depth-1">
        {/* image */}
        <img src={props.img} className="card-img-top" alt={props.alt} />
        {/* card content */}
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text text-justify text-muted">{props.text}</p>
          <a
            href="#"
            className={`btn btn-${props.btnColor} btn-${props.btnSize}`}
          >
            {props.btnName}
          </a>
        </div>
      </div>
    </div>
  );
};
export default ItemsCard;
