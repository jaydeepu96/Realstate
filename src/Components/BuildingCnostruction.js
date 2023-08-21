import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import builImage from '../Assets/buil.png'; // Import your banner image
import ppImg from '../Assets/pp.png';
import s1Img from '../Assets/s1.png';
import sliderimgImg from '../Assets/sliderimg.png'
import '../ComponentCss/BulidingConst.css'; // You can add your custom CSS here

const BuildingCnostruction = () => {
        return (

                //             <Container style={{backgroundColor:"#00326f",height:"800px",}}>
                //            <Row>
                //             <Col md={12}>
                //             <Col md={6}><img src={builImage} alt="build" style={{height:"400px",width:"30%",marginTop:"80px",marginLeft:"140px",}}/></Col>
                //             <Col md={6}
                //              style={{color:"white",marginLeft:"200px"}}>
                //             <h1>ABOUT BUILDERRINE CONSTRUCTION</h1>
                //             <h1 >Building A New Era In World Of Construction</h1>
                //             <p >Builderrine is the safe, reliable and cost effective construction<br/> company. We offer best 
                //                  construction Services. We have more than<br></br> 35 years of experience in the field of building & construction.<br/> If you 
                //                     want to build any highrise or housing projects, you are in the best palce right now</p>
                //             <Button variant="primary" style= 
                //                {{height:"50px",width:"150px",padding:"20px",marginRight:"20px",marginBottom:"50px",background:"#ffa903"}}>Learn 
                //                  More</Button>
                //           </Col>
                //       </Col>
                //            </Row>
                //             </Container>

                <div class="experience section">
                        <div class="container" >
                                <div class="row">
                                        <div class="col-lg-6" style={{marginLeft:"80px"}}>
                                        <div class="group_image_holder type_1">
                                              
                                                                <div class="image_object">
                                                                        <img src={builImage } alt="" />
                                                                       </div></div></div>
                                        <div class="col-lg-6 col-md-12">
                                                <div class="experience_content">
                                                        <div class="section_header">
                                                                <div class="shadow_icon">
                                                                        <img src="images/about/shadow_icon1.png" alt="" />
                                                                        </div>
                                                                        <h6 class="section_sub_title" style={{color:"#ffa903",fontSize:"16px"}}>ABOUT BUILDERRINE CONSTRUCTION</h6>
                                                                        <h1 class="section_title" style={{color:"white"}}>Building A New Era in world of Construction</h1>
                                                                        <p class="section_desc" style={{color:"white"}}>Builderrine is the safe, reliable and cost effective construction company. We offer best construction Services. We have more than 35 years of experience in the field of building &amp; construction. If you want to build any highrise or housing projects, you are in the best palce right now</p>
                                                                        <div class="about_below">
                                                                                <div class="about_below_content">
                                                                                        <i class="ion ion-ios-checkmark-outline" aria-hidden="true"></i>
                                                                                        <div class="about_below_content_text">
                                                                                                <h5 style={{color:"white"}}>Most Reliable</h5>
                                                                                                <p style={{color:"white"}}>More than 200 Company trusted us</p>
                                                                                                </div></div>
                                                                                                <div class="about_below_content">
                                                                                                        <i class="ion ion-ios-checkmark-outline" aria-hidden="true"></i>
                                                                                                        <div class="about_below_content_text">
                                                                                                                <h5 style={{color:"white"}}>Cost Effective</h5>
                                                                                                                <p style={{color:"white"}}>Builderrine is famous for its cost effectiveness</p>
                                                                                                                </div></div></div></div>
                                                                                                                <a class="button" href="/about" style={{color:"white"}}>Learn More</a>
                                                                                                                </div></div></div></div></div>


        );
};

export default BuildingCnostruction;
