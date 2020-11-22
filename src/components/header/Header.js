import React from "react";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className="container my-4 py-4 " id="header">
      <div className="row ">
        <div className="col-md d-none d-sm-block">
          <h2 className="font-weight-bold">Restro Restraunt</h2>

          <div className="container">
            <p className="text-justify">
              Restaurant Restro is one of the oldest Vegeterian restaurant in
              India center, which offers traditional Vegetrain specialties which
              you can enjoyed in the pleasant air conditioned ambience.
            </p>
          </div>
          <Button buttonName="Book Now " buttonColor="success" btnSize="md" />
        </div>
        <div className="col-md d-none d-sm-block">
          <img
            src={process.env.PUBLIC_URL + "/images/header.jpg"}
            alt="headerImage"
            className="img-fluid z-depth-3 "
          />
        </div>
        <div className="col-md d-block d-md-none">
          <img
            src={process.env.PUBLIC_URL + "/images/header.jpg"}
            alt="headerImage"
            className="img-fluid z-depth-3"
          />
        </div>
        <div className="col-md d-block d-md-none mt-4">
          <h4 className="font-weight-bold">Restro Restraunt</h4>

          <div className="container">
            <p className="text-justify">
              Restaurant Restro is one of the oldest Vegeterian restaurant in
              India center, which offers traditional Vegetrain specialties which
              you can enjoyed in the pleasant air conditioned ambience.
            </p>
          </div>
          <Button buttonName="Book Now" buttonColor="success" btnSize="sm" />
        </div>
      </div>
    </div>
  );
};
export default Header;
