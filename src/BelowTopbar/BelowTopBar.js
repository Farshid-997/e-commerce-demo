import React from 'react'
import "./BelowTopBar.css"
import { GiHamburgerMenu } from "react-icons/gi";
import fbicon from "../Assests/Fb Icon.svg"
import twicon from "../Assests/Twitter Icon.svg"
import liicon from "../Assests/Linkedin Icon.svg"
import insIcon from "../Assests/Instagram Icon.svg"
export default function BelowTopBar() {
  
  return (
    <div className='main-top-bar '>


  <div className="menu d-flex">
    <div className="hamburger-menu">

      <GiHamburgerMenu/>
    </div>
    <ul className="menu-items">
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Item 2</a></li>
      <li><a href="#">Item 3</a></li>
      <li><a href="#">Item 4</a></li>
      <li><a href="#">Item 5</a></li>
    </ul>
  </div>



  <div className="social-icons">
  <div className="d-flex  mt-2 d-none d-md-block">
              <a href="#"   target="_blank"
            rel="noreferrer">
                {" "}
                <img src={fbicon} alt="" height="25" width="25" className="me-2" />
              </a>
             
              <a href="#"   target="_blank"
            rel="noreferrer">
                <img src={twicon} alt="" height="25" width="25" className="mx-2 text-primary" />
              </a>

              <a href="#"   target="_blank"
            rel="noreferrer">
                <img src={liicon} alt="" height="25" width="25" className="mx-2" />
              </a>
              <a href="#"   target="_blank"
            rel="noreferrer">
                <img
                  src={insIcon}
                  alt=""
                  height="25"
                  width="25"
                  className="mx-2"
                />
              </a>
            </div>

  </div>





</div>



   
  )
}
