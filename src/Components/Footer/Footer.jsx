import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../Assests/Vector 1.png";
import "./Footer.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <Container fluid className="footers pb-5 ps-2 ">
      <Container className="text-secondary my-5 pt-3">
        <Row className="my-5 ms-2 words">
          <Col xs={4} md={2} className=" mx-3 pe-5">
            <Row>
              <Col xs={2} md={12}>
                <div>
                  <img src={logo} alt="" />
                </div>{" "}
                <p className="call-now">Got questions? Call us 24/7!</p>
                <p className="mobile-no">
                  03 111 666 144 <br></br> 0317 1777015.
                </p>
              </Col>
              <Col xs={3} md={12} className="d-none d-md-block text-white">
                <p className="contact-info">Contact info</p>{" "}
                <p className="sub-contact">Contact info info@winstore.pk</p>{" "}
                <p className="social-icons">
                  {" "}
                  <FaFacebookF className="fb-icons" />
                  <AiOutlineTwitter className="tw-icons" />
                  <FaLinkedinIn className="li-icons" />
                  <FaInstagram className="insta-icons" />
                </p>
              </Col>
            </Row>
          </Col>

          <Col xs={4} md={2} className=" me-5 pe-2">
            <Row>
              <Col xs={12} className="mb-4">
                <p className="trending">Trending</p>{" "}
                <p className="subtext">Installments</p>
                <p className="subtext">Electronics</p>
                <p className="subtext">Grocery</p>
                <p className="subtext">Health & Beauty</p>
                <p className="subtext">Home Appliances</p>
                <p className="subtext">Mobile Accessories</p>
              </Col>
            </Row>
          </Col>

          <Col xs={2} className=" me-5 pe-5">
            <Row>
              <Col xs={12} className=" d-none d-md-block">
                <p className="information">Information</p>
                <p className="subtext">About Us</p>
                <p className="subtext">Contact Us</p>{" "}
                <p className="subtext">FAQs</p>
                <p className="subtext">Shipping & Return</p>
                <p className="subtext">Privacy policy</p>
                <p className="subtext">Terms & Conditions</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={2} className="">
            <p className="more">My Account</p>{" "}
            <p className="subtext">Track Your Order</p>{" "}
            <p className="subtext">Recently Viewed</p>
            <p className="subtext">Wishlist</p>
            <p className="subtext">Compare</p>
            <p className="subtext">Become a Vendor</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
