/** @format */

import React, { useState } from "react";
import FoodDeckLogo from "../../assets/FoodDeckLogo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./nav.css";

const NavBar = () => {
  const [click, setClick] = useState(true);


  const handleToggle = () => {
    setClick((prevClick) => !prevClick);
  };

  

  return (
    <nav>
      <div className="navbar-container">
        <div className="nav-img">
          <Link className="navlink" to="/">
            <img src={FoodDeckLogo} alt="The Food Deck Logo" />
          </Link>
        </div>
        <ul className={!click ? "nav-ul" : "nav-close"}>
          <Link className="navlink" to="/">
            <li>Home</li>
          </Link>
          <Link className="navlink" to="/about">
            <li>About</li>
          </Link>
          <Link className="navlink" to="/product">
            <li>Products</li>
          </Link>
          <Link className="navlink" to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
        <div onClick={handleToggle} className="nav-icons">
          {click ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
