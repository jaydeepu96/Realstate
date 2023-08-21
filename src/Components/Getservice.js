import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BannerImage from '../Assets/Banner.jpg'; // Import your banner image
import sliderimgImg from '../Assets/sliderimg.png';
import jcbImg from '../Assets/jcb.png';
import hasImg from '../Assets/has.png';
import housImg from '../Assets/hous.png';
import houseImg from '../Assets/house.png'
import jbImg from '../Assets/jb.png'
import '../ComponentCss/Getservice.css'; // You can add your custom CSS here

const Getservice = () => {
    return (

        // <Container>
        //     <Row>
        //         <Col md={12}>
        //             <Col md={4} style={{ background: "#2b4c75" }}>
        //              <img src={jcbImg} alt='jcb' style={{ height: "100px", width: "100p%", }}></img>
        //              <h2 style={{ color: "#ffa903" }}>SERVICE ONE</h2>
        //                     <p style={{ color: "#fff" }}>Industrial & Highrise Construction</p>
        //                     <Button style={{ color: "#fff", marginBottom: "20px" }} >Get Service</Button>
        //               <img src={jbImg} alt='jcb' style={{ height: "150px", }} />

        //             </Col>

        //             <Col md={4} style={{ background: "#ffa903", }}>
        //               <img src={hasImg} alt='jcb' style={{ height: "150px",  }}></img>
        //              <h2 style={{ color: "white" }}> SERVICE TWO</h2>
        //                     <p style={{ color: "#fff" }}>Real Estate & Housing Construction</p>
        //                     <Button style={{ color: "#fff",}} >Get Service </Button>
        //               <img src={houseImg} alt='jcb' style={{ height: "150px",}}></img>


        //             </Col>
        //             <Col md={4} style={{ background: "#2b4c75" }}>
        //               <img src={housImg} alt='jcb' style={{ height: "150px", marginTop: "20px" }} />
        //                 <h2 style={{ marginTop: "50px", color: "#ffa903" }}> SERVICE THREE</h2>
        //                     <p style={{ color: "White" }}>Commertial Design & Building Construction</p>
        //                     <Button style={{ color: "white", marginBottom: "20px" }} >Get Service </Button>
        //               <img src={sliderimgImg} alt='jcb' style={{ height: "150px", }}></img>
        //             </Col>
        //         </Col>
        //         </Row>
        // </Container>
        <div class="service">
          <div class="container-fluid g-0">
            <div class="row g-0">
              <div class="col-lg-4 col-md-4">
                <div class="service_inner service_inner2 bg_1">
                  <div class="service_content d-flex align-self-center">
                    <div class="icon_img"><img src={jcbImg} alt=""/></div>
                    <div class="services_content_flex_cenrer">
                      <h6>SERVICE ONE</h6>
                      <h4><a href="/services" style={{color:"#FFF"}}>Industrial &amp; Highrise Construction</a></h4>
                      <a href="/service-details" style={{color:"#FFF"}}>Get Service <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></div></div>
                      <div class="main_img"><img src={jcbImg} alt=""/></div></div></div>
                      <div class="col-lg-4 col-md-4">
                        <div class="service_inner service_inner2 bg_2">
                          <div class="service_content d-flex align-self-center">
                            <div class="icon_img"><img src={hasImg} alt=""/></div>
                            <div class="services_content_flex_cenrer">
                              <h6>SERVICE TWO</h6>
                              <h4><a href="/services" style={{color:"#FFF"}}>Real Estate &amp; Housing Construction</a></h4>
                              <a href="/service-details" style={{color:"#FFF"}}>Get Service <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                              </div></div>
                              <div class="main_img">
                                <img src={houseImg} alt=""/></div></div></div>
                                <div class="col-lg-4 col-md-4">
                                  <div class="service_inner service_inner2 bg_3">
                                    <div class="service_content d-flex align-self-center">
                                      <div class="icon_img"><img src={housImg} alt=""/></div>
                                      <div class="services_content_flex_cenrer">
                                        <h6>SERVICE THREE</h6>
                                        <h4><a href="/services" style={{color:"#FFF"}}>Commertial Design &amp; Building Construction</a></h4>
                                        <a href="/service-details" style={{color:"#FFF"}}>Get Service <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></div></div>
                                        <div class="main_img"><img src={sliderimgImg} alt=""/></div>
                                        </div></div></div></div></div>


       
    );
};

export default Getservice;