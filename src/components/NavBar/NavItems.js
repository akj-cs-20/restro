import React from "react";

const NavItems = (props) => {
  return (
    <div>
      <li className="nav-item">
        <a className="nav-link " href={props.navLink}>
          {props.name}
        </a>
      </li>
    </div>
  );
};
export default NavItems;
