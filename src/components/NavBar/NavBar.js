import React from "react";
import NavItem from "./NavItems";
import NavSocial from "./NavSocial";

const NavBar = () => {
  const companyName = "Restro";
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <header>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark special-color-dark font-weight-4 scrolling-navbar">
              <a className="navbar-brand" href="#header">
                <strong>{companyName}</strong>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span>
                  <i className="fas fa-bars fa-1x"></i>
                </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto ">
                  <NavItem name="Home" navLink="#header" />
                  <NavItem name="Items" navLink="#items" />
                  <NavItem name="Gallerly" navLink="#" />
                  <NavItem name="Contact Us" navLink="#" />
                </ul>
                <div className="d-none d-md-block">
                  <ul className="navbar-nav nav-flex-icons ml-auto ">
                    <NavSocial socialIcon="facebook-f" socialLink="#" />
                    <NavSocial socialIcon="twitter" socialLink="#" />
                    <NavSocial socialIcon="instagram" socialLink="#" />
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
