import React from "react";
import { NavLink } from "react-router-dom";

const FooterOne = () => {
  const activeStyle = { color: "#ff9900" };
  return (
    <div className="container so-upperSection">

      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-4 pt-1">
       
        </div>
        <div className="col-4 text-center so-nopad">
Footer Text 
       </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
  
        </div>
      </div>



      <nav className="so-topnav">
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeStyle}>
       Courses of Action
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About 5-5s.com
      </NavLink>
    </nav></div>
  );
};

export default FooterOne;
