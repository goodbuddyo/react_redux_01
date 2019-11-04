import React from "react";
import { NavLink } from "react-router-dom";



const Header = () => {
  const activeStyle = { color: "#ff9900" };
  return (
    <div className="container so-upperSection">

      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-4 pt-1">
       
        </div>
        <div className="col-4 text-center so-nopad">
          <a className="blog-header-logo text-dark" href="#"><img src="/static/img/55sLogo454x140.png" className="so-55sLogo" alt="Logo" /></a>
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

export default Header;
