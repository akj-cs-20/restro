import React from "react";

const NavSocial = (props) => {
  return (
    <div>
      <li className="nav-item">
        <a className="nav-link" href={props.socialLink}>
          <i className={`fab fa-${props.socialIcon}`}></i>
        </a>
      </li>
    </div>
  );
};
export default NavSocial;
