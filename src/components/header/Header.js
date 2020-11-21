import React from "react";

const Header = () => {
  return (
    <div className="container my-4 py-4 " id="header">
      <div className="row">
        <div className="col-md">
          <h2 className="font-weight-bold">Restro Restraunt </h2>
          <span className="justify-content">The Place Where you enjoy it</span>
        </div>
        <div className="col-md ">
          <img
            src={process.env.PUBLIC_URL + "/images/header.jpg"}
            alt="headerImage"
            className="img-fluid z-depth-5"
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
