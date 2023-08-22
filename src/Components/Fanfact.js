import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import cardImage from '../Assets/card.png'; // Import your banner image
import p2Img from '../Assets/p2.png';
import p3Img from '../Assets/p3.png';
import p4Img from '../Assets/p4.png';
import gilImg from '../Assets/gil.png';
import '../ComponentCss/Fanfact.css'; // You can add your custom CSS here

const Fanfact = () => {
    return (
        <>
            {/* <Container style={{ backgroundColor: "#00326f", height: "900px",display:"flex" }}>
                <Row>
                    
                   <Col md={8}>
                   <h1 style={{ color: "#ffa903", fontSize: "20px", marginLeft: "30px" }}>FUNFACTS OF BUILDERRINE CONSTRUCTION</h1>
                    <h1 style={{ color: "white", fontSize: "30px", marginLeft: "30px" }}>Our Fact Speaks About The <br></br> Result Of Our Effort</h1>
                    <Col md={4}>
                        <Card style={{ marginTop: '20px', width: "350px", height: "155px" }} className='funbox1'>
                            <Card.Body>
                        <Image src={cardImage} alt="Code Image" fluid />
                       <Card.Text style={{ color: "white", fontSize: "25px" }}>33 Years of Experience</Card.Text>
                        </Card.Body>
                        </Card>

                        <Card style={{ marginTop: '20px', width: "350px", height: "155px" }} className='funbox1'>
                            <Card.Body>
                           <Image src={cardImage} alt="Code Image" fluid />
                        <Card.Text style={{ color: "white", fontSize: "25px" }}>33 Years of Experience</Card.Text>
                       </Card.Body>
                        </Card>
                        </Col>

                        <Col md={4}>
                            <Card style={{ marginTop: '20px', width: "350px", height: "155px" }} className='funbox1'>
                                <Card.Body>
                     <Image src={cardImage} alt="Code Image" fluid />
                    <Card.Text style={{ color: "white", fontSize: "25px" }}>33 Years of Experience</Card.Text>
                      </Card.Body>
                            </Card>

                            <Card style={{ marginTop: '20px', width: "350px", height: "155px" }} className='funbox1'>
                                <Card.Body>
                  <Image src={cardImage} alt="Code Image" fluid />
                 <Card.Text style={{ color: "white", fontSize: "25px" }}>33 Years of Experience</Card.Text>
              </Card.Body>
                    </Card>
                        </Col>
                   </Col>
                  
                  
                     <Col md={4}>
                        <Image src={gilImg} alt="Code Image" fluid />
                    </Col>
                </Row>
               </Container> */}
               <div className='container'>
                <div className='row'>
                    <div className='col-lg-8' style={{marginLeft:"60px"}}>
                        <div className='section
                        _header'>
                            <h6 className='subtitel'>FUNFACTS OF BUILDERRINE CONSTRUCTION</h6>
                            <h3 className='sectiontitle'>Our Fact Speaks about the result of our Effort</h3>
                        </div>
                        <div className='section_bottom'>
                            <div className='row'>
                            <div class="col-lg-6 col-sm-6"><div class="funbox1"><div class="fun_img"><img src={cardImage} alt="icon"/></div><div class="funcont"><h1><span>33</span></h1><p>Years of Experience</p></div></div></div>
                        <div class="col-lg-6 col-sm-6"><div class="funbox1"><div class="fun_img"><img src={p2Img} alt="icon"/></div><div class="funcont"><h1><span>100</span></h1><p>Projects Completed</p></div></div></div>
                        <div class="col-lg-6 col-sm-6"><div class="funbox1"><div class="fun_img"><img src={p3Img} alt="icon"/></div><div class="funcont"><h1><span>300</span></h1><p>Expert Builders</p></div></div></div>
                        <div class="col-lg-6 col-sm-6"><div class="funbox1"><div class="fun_img"><img src={p4Img} alt="icon"/></div><div class="funcont"><h1><span>36</span></h1><p>Ongoing Project</p></div></div></div>
                            </div>
                       
                        </div>
                    </div>
                    <div class="fanimg"><div class="man_img"><img src={gilImg} alt="icon"/></div></div>
                </div>
               </div>

        </>

    );
};

export default Fanfact;
