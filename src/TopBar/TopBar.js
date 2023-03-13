import React from "react";
import logo from "../Assests/Vector 1.png";
import "./TopBar.css";
import line from "../Assests/Line 7.png";
import mobile from "../Assests/XMLID_792_.png";
import login from "../Assests/Vector.png";
import love from "../Assests/Vector (1).png";

import { FiShoppingCart } from "react-icons/fi";

export default function TopBar() {
  return (
    <>
      {/* parent component of topbar start here */}
      <nav className="d-flex justify-content-between main-div container-fluid">
        {/* image section and input div start here  */}

        <section className="d-flex">
          <div className="d-flex">
            <img src={logo} alt="logo" className="logo-img"></img>

            <h6 className="logo-text">store</h6>
          </div>

          {/* input div start here */}
          <div className="input-divs">
            {/* select div starts here */}
            <div className="d-flex">
              <select>
                <option value="volvo">All categories</option>
                <option value="saab">All categories</option>
              </select>

              {/* line-img */}
              <img src={line} alt="input-line" className="line-img"></img>
            </div>
            {/* select div ends here */}
          </div>
        </section>
        {/* image section and input div ends here  */}

        {/* 2nd section starts here */}

        <section className="d-flex flex-row justify-content-between ">
          {/* second section icons start */}
          <div className="d-flex flex-column">
            {/* first text */}

            <p className="call-us">Call Us Now</p>

            <div className="d-flex justify-content-center">
              <img src={mobile} alt="mobile-icon" className="mobile-icon"></img>
              <p className="mbl-number">+011 5827918</p>
            </div>
          </div>

          <div className="d-flex justify-content-evenly">
            <img src={login} alt="" className="login-icon"></img>

            <img src={love} alt="" className="love-icon"></img>

            {/* cart icon and cat name */}
            <div className="d-flex justify-content-end">
              <FiShoppingCart className="cart-icon" />

              <p className="cart-name">Cart</p>
            </div>
          </div>
        </section>
      </nav>
      {/* parent component of topbar ends here */}
    </>
  );
}
