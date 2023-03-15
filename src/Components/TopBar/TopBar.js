import React from "react";
import logo from "../../Assests/Vector 1.png";
import "./TopBar.css";
import line from "../../Assests/Line 7.png";
import mobile from "../../Assests/XMLID_792_.png";
import login from "../../Assests/Vector.png";
import love from "../../Assests/Vector (1).png";

import { FiShoppingCart } from "react-icons/fi";
import { Col, Container, Row } from "react-bootstrap";
import { BiUser } from "react-icons/bi";
export default function TopBar() {
  return (
    // <div className="container-fluid px-0">

    //   <div className="main-div">
    //     <section className="d-flex">
    //       <div className="d-flex">
    //         <img src={logo} alt="logo" className="logo-img"></img>

    //         <h6 className="logo-text">store</h6>
    //       </div>

    //       <div className="input-divs">

    //         <div className="d-flex">
    //           <select>
    //             <option value="volvo">All categories</option>
    //             <option value="saab">All categories</option>
    //           </select>

    //           <img src={line} alt="input-line" className="line-img"></img>
    //         </div>

    //       </div>
    //     </section>

    //     <section className="d-flex justify-content-between align-items-center">
    //       <div className="NavPara">
    //         <p>Call Us Now</p>
    //         <div className="d-flex">
    //           <img src={mobile} width={18} height={18}></img>
    //           <p>+011 5827918</p>
    //         </div>
    //         <p>Sign In</p>
    //       </div>
    //       <div className="d-flex align-items-center justify-content-between cartsbar">
    //         <img src={love}></img>
    //         <img src={love}></img>
    //         <div className="d-flex align-items-center justify-content-center">
    //         <img src={love}></img>
    //         <p className="cartsbarPara">Cart</p>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    //   {/* parent component of topbar ends here */}
    // </div>

    <>
      <Container fluid className="main-div">
        <div className="d-flex flex-row ">
          <img src={logo} alt="logo" className="logo-img"></img>

          <p className="logo-text">store</p>
        </div>

        <Row>
          <Col>
            <div className="NavPara">
              <p className="call">Call Us Now</p>
              <div className="d-flex">
                <img src={mobile} width={18} height={18}></img>
                <p>+011 5827918</p>
              </div>
              <p>Sign In</p>
            </div>
          </Col>

          <Col>
            <div className="d-flex align-items-center justify-content-between cartsbar">
              {/* <img src={love}></img> */}
              <BiUser className="user-icon" />
              <img src={love}></img>
              <div className="d-flex align-items-center justify-content-center">
                <FiShoppingCart className="cart-icon" />
                <p className="cartsbarPara">Cart</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
