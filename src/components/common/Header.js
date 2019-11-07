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
          <NavLink to="/" >
            <img src="/static/img/5-5sLogo04.gif" className="so-55sLogo" alt="Logo" />
          </NavLink>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
  
        </div>
      </div>



    <nav className="so-topnav">
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses of Actions
      </NavLink>
      {" | Steps "}
      <NavLink to="/stepone" activeStyle={activeStyle}>
        1
      </NavLink>
      {" | "}
      <NavLink to="/steptwo" activeStyle={activeStyle}>
      2
      </NavLink>
      {" | "}
      <NavLink to="/stepthree" activeStyle={activeStyle}>
      3
      </NavLink>
      {" | "}
      <NavLink to="/stepfour" activeStyle={activeStyle}>
      4
      </NavLink>
      {" | "}
      <NavLink to="/stepfive" activeStyle={activeStyle}>
      5
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
      About 
      </NavLink>

    </nav>
    </div>
  );
};

export default Header;
