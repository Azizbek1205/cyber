import React from "react";
import logo from "../assets/logo.svg";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <div className="head-input-box">
          <IoSearchOutline />
          <input type="search" placeholder="Search" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"*"}>About</Link>
            </li>
            <li>
              <Link to={"*"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"*"}>Blog</Link>
            </li>
          </ul>
        </nav>
        <div className="head-icons">
          <IoIosHeartEmpty />
          <AiOutlineShoppingCart />
          <GoPerson />
        </div>
      </header>
    </div>
  );
}

export default Header;
