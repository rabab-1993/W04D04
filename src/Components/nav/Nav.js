import React from "react";
import { Link } from "react-router-dom";
import {FaArrowCircleLeft, FaStar} from "react-icons/fa";
import './style.css';

const Nav = () => {
  return (
    <div className="nav">
      <ul>
          <i><FaArrowCircleLeft /></i>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/Cards">
         
          <li>Cards</li>
        </Link>
          <Link to="/fav" className="fav"><FaStar /></Link>
      </ul>
    </div>
  );
};

export default Nav;
