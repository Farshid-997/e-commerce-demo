import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../Assests/Vector 1.png"
import "./Footer.css";
const Footer = () => {
  return (
    <Container fluid className="footers pb-5 ps-2 ">
      <Container className="text-secondary my-5 pt-3">
       
       

        <Row className="my-5 ms-2 words">
          {/*  footer img */}
          <Col xs={4} md={2} className="me-2">

            <div>
            <img src={logo} alt="" />

            </div>
           
           <p className="call-now">Got questions? Call us 24/7!
</p>
           
          </Col>





          <Col xs={4} md={2} className=" mx-3 pe-5">
            <Row>
              <Col xs={2} md={12}>
                <p className="text-white fw-bolder fs-5">Products</p>
              
                  {" "}
                  <p className="ashText">Unive Learning</p>
             
                {/* <NavLink to='/onboarding'> <p className='ashText'>Unive Onboarding</p></NavLink> */}
               
                  <p className="ashText">Unive Skill Assessments</p>
               
              </Col>
              <Col xs={3} md={12} className="d-none d-md-block text-white">
                <p className="text-white fw-bolder fs-5">Plans</p>
               
                  {" "}
                  <p className="ashText">For Individuals</p>
             
               
                  {" "}
                  <p className="ashText">For Enterprise</p>
              
              
                  <p className="ashText">For Manpower as a Service</p>
               
              </Col>
            </Row>
          </Col>

          
          <Col xs={5} md={12} className="d-block d-md-none text-white">
            <p className="text-white fw-bolder fs-5">Plans</p>
           
              {" "}
              <p className="ashText">For Individuals</p>
          
           
              {" "}
              <p className="ashText"> For Enterprise</p>
          

            
              <p className="ashText">For Manpower as a Service</p>
            
          </Col>

          <Col xs={4} md={2} className=" me-5 pe-2">
            <Row>
              <Col xs={12} className="mb-4">
                <p className="text-white fw-bolder fs-5">Resources</p>
               
                  <p className="ashText">Unive Blog</p>
               
                {/* <NavLink to='/FAQ'>  <p className='ashText'>FAQ</p></NavLink> */}
              </Col>
              <Col xs={12} className="d-none d-md-block">
             
                  <p className="ashText">Become an instructor</p>
               
              
                  <p className="ashText">Become a Contributor</p>
               
              </Col>
            </Row>
          </Col>
          <Col xs={5} md={12} className="d-block d-md-none text-white">
            <p className="text-white fw-bolder fs-5">Legal</p>
           
              <p className="ashText">Privacy Policy</p>
          
            {/* <NavLink to='/privacy'><p className='ashText'>Cookie Settings</p></NavLink> */}
           
              <p className="ashText">Terms of Service</p>
           
           
              {" "}
              <p className="ashText"> Business Terms of Service</p>
           
          </Col>
          <Col xs={4} className=" d-block d-md-none me-5 pe-4 ">
            <p className="text-white fw-bolder fs-5">Contribute</p>
          
              <p className="ashText">Become an instructor</p>
            
          
              <p className="ashText">Become a Contributor</p>
         
          </Col>
          <Col xs={2} className=" me-5 pe-5">
            <Row>
              <Col xs={12} className=" d-none d-md-block">
                <p className="text-white fw-bolder fs-5">Legal</p>
              
                  <p className="ashText">Privacy Policy</p>
              
                {/* <NavLink to='/privacy'><p className='ashText'>Cookie Settings</p></NavLink> */}
             
                  <p className="ashText">Terms of Service</p>
               
              
                  {" "}
                  <p className="ashText">Business Terms of Service</p>
              
              </Col>
              <Col xs={12} className="d-none d-md-block">
                {/* <p className="text-white">About Us</p> */}
                {/* <NavLink to="/our-team">
                  {" "}
                  <p className="ashText">Our Team</p>
                </NavLink> */}
               
                  {" "}
                  <p className="ashText">Careers</p>
              
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={2} className="">
            <p className="text-white fw-bolder fs-5">More</p>
          
              {" "}
              <p className="ashText">Course Catalog</p>
            
          
              {" "}
              <p className="ashText">Scholarships</p>
           
          
          
              <p className="ashText">Contact Us</p>
           
          </Col>
        </Row>
        <hr />
       
      </Container>
      
    </Container>
  );
};

export default Footer;
