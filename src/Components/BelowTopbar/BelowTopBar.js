import React from 'react'
import "./BelowTopBar.css"
import { GiHamburgerMenu } from "react-icons/gi";

import { FaFacebookF,FaLinkedinIn,FaInstagram} from "react-icons/fa";
import {AiOutlineTwitter } from "react-icons/ai";
export default function BelowTopBar() {
  
  return (

<div className='mains-top-bar'>
<div className='d-flex justify-content-between  align-items-center'>
  <div className="menu d-flex">
    <div>
      <GiHamburgerMenu className="hamburger-menu"/>
    </div>
    <ul className="menu-items">
      <li><a href="#" className='br-text'>Brouse By Category</a></li>
      <li><a href="#"className='li-texts'>Home</a></li>
      <li><a href="#"className='li-texts'>Easy Monthly Installments</a></li>
      <li><a href="#"className='li-texts'>Shop by Brands</a></li>
      <li><a href="#"className='li-texts'>Become a Vendor</a></li>
    </ul>
  </div>
  <div className="social-icons ">
    <FaFacebookF className='fb-icons'/>
    <AiOutlineTwitter className='tw-icons'/>
    <FaLinkedinIn className='li-icons'/>
    <FaInstagram className='insta-icons'/>
  </div>
</div>
</div>


   
  )
}
