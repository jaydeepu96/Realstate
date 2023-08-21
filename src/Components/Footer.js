import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../ComponentCss/Footer.css'

const Footer = () => {
    return (
    //    <footer class="footer">
    //    <div class="footer_above">
    //    <div class="container">
    //    <div class="row">
    //    <div class="col-lg-4 col-md-6 col-sm-12">
    //    <div class="footer_widget footer_widget_padding">
    //    <h4 class="widget_title"style={{color:"white"}}>About Builderrin</h4>
    //    <p style={{color:"white"}}>Who are looking for Extraordinary<br></br> projects need vision &amp; <br></br>precision to be exceptional. <br></br>They need Builderrine Construction Services.</p>
    //    <div class="subscribe">
    //    <form class="form-inline">
    //    <input type="email" class="form-control" placeholder="Email Address"/>
    //   
    //    <button type="submit" class="btn" style={{color:"white"}}>Subscribe</button>
    //    </form>
    //    </div>
    //    </div></div>
    //    <div class="col-lg-2 col-md-6 col-sm-12">
    //     <div class="footer_widget footer_links">
    //         <h4 class="widget_title" style={{color:"white"}}>Our Services</h4>
    //         <div class="footer_nav">
    //             <ul class="footer_menu">
    //                 <li class="menu-item">
    //                     <a href="/project" style={{color:"white"}}>Web Design</a></li>
    //                     <li class="menu-item" ><a href="/project-2" style={{color:"white"}}>Construction</a></li>
    //                     <li class="menu-item" ><a href="/project-details" style={{color:"white"}}>Economics</a></li>
    //                     <li class="menu-item"><a href="/project-2" style={{color:"white"}}>Photography</a></li>
    //                     <li class="menu-item" ><a href="/project" style={{color:"white"}}>Digital Marketing</a></li>
    //                     </ul></div></div></div>
    //                     <div class="col-lg-2 col-md-6 col-sm-12">
    //                         <div class="footer_widget footer_links">
    //                             <h4 class="widget_title" style={{color:"white"}}>Useful Links</h4>
    //                             <div class="footer_nav">
    //                                 <ul class="footer_menu">
    //                                     <li class="menu-item" ><a href="/about" style={{color:"white"}}>About Us</a></li>
    //                                     <li class="menu-item" ><a href="/blog-details" style={{color:"white"}}>Courses</a></li>
    //                                     <li class="menu-item"><a href="/project-details" style={{color:"white"}}>Enrollment</a></li>
    //                                     <li class="menu-item" ><a href="/service-details" style={{color:"white"}}>Be an Instructor</a></li>
    //                                     <li class="menu-item" ><a href="/contact" style={{color:"white"}}>Contact Us</a></li></ul></div></div></div>
    //                                     <div class="col-lg-4 col-md-6 col-sm-12">
    //                                         <div class="footer_widget">
    //                                             <h4 class="widget_title" style={{color:"white"}}>Address</h4>
    //                                             <ul>
    //                                                 <li><i class="fa fa-map-marker" aria-hidden="true"></i>
    //                                             <span style={{color:"white"}}>13 Madison Street NewYork, USA</span>
    //                                             </li>
    //                                             <li><i class="fa fa-envelope" aria-hidden="true"></i>
    //                                             <span style={{color:"white"}}>builderrine@gmail.com</span></li>
    //                                             <li><i class="fa fa-clock-o" aria-hidden="true"></i>
    //                                             <span style={{color:"white"}}>Monday - Friday (9.00am - 9.00pm)</span></li></ul>
    //                                             <div class="side_footer_social">
    //                                                 <ul class="bottom_social">
    //                                                     <li class="facebook"><a href="#"><i class="ion-social-facebook"></i></a></li>
    //                                                     <li class="twitter"><a href="#"><i class="ion-social-twitter"></i></a></li>
    //                                                     <li class="dribbble"><a href="#"><i class="ion-social-dribbble-outline"></i></a></li>
    //                                                     <li class="instagram"><a href="#"><i class="ion-social-instagram-outline"></i></a></li>
    //                                                     <li class="linkedin"><a href="#"><i class="ion-social-linkedin-outline"></i></a></li></ul></div>
    //                                                     </div></div></div></div></div>
    //                                                     <div class="footer_bottom">
    //                                                         <div class="container">
    //                                                             <div class="footer_bottom_inner">
    //                                                                 <div class="logo"><a href="index"><img src="images/logo_foot.svg" alt="Logo"/></a></div>
    //                                                                 <div class="copyright" style={{color:"white"}}><p>©2023 <a href="https://themeforest.net/user/wpthemebooster">WPThemeBooster.</a> All rights reserved.</p></div>
    //                                                                 <div class="footer_nav_bottom">
    //                                                                     <ul><li><a href="#" style={{color:"white"}}>Terms &amp; Conditions</a></li>
    //                                                                     <li><a href="#" style={{color:"white"}}>Privacy Policy</a></li></ul></div>
    //                                                                     <div class="totop"><a href="#"><i class="ion-ios-arrow-up"></i></a></div></div></div></div></footer>
                  
              
            <>
            <Container style={{height:"300px",width:"100%"}}>
                <Row>
                    <Col md={3} style={{marginLeft:"100px"}}>
                    <h3 class="widget_title"style={{color:"white"}}>About Builderrin</h3>
                    <p style={{color:"white"}}>Who are looking for Extraordinary<br></br> projects need vision &amp; <br></br>precision to be exceptional. <br></br>They need Builderrine Construction Services.</p>
                    <form class="form-inline">
        {/* <input type="email" class="form-control" placeholder="Email Address" /> */}
       <button type="submit" class="btn" style={{color:"white",}}>Subscribe</button>
    </form>
                    </Col>
                    <Col md={3}  style={{marginLeft:"100px"}}>
                    <h3 class="widget_title" style={{color:"white"}}>Our Services</h3>
                    <ul class="footer_menu">
                     <li class="menu-item">
                        <a href="/project" style={{color:"white"}}>Web Design</a></li>
                        <li class="menu-item" ><a href="/project-2" style={{color:"white"}}>Construction</a></li>
                         <li class="menu-item" ><a href="/project-details" style={{color:"white"}}>Economics</a></li>
                         <li class="menu-item"><a href="/project-2" style={{color:"white"}}>Photography</a></li>
                         <li class="menu-item" ><a href="/project" style={{color:"white"}}>Digital Marketing</a></li>
                         </ul>
                    </Col>
                    <Col md={3}  style={{marginLeft:"100px"}}>
                    <h3 class="widget_title" style={{color:"white"}}>Useful Links</h3>
                    <ul class="footer_menu">
                                         <li class="menu-item" ><a href="/about" style={{color:"white"}}>About Us</a></li>
                                         <li class="menu-item" ><a href="/blog-details" style={{color:"white"}}>Courses</a></li>
                                         <li class="menu-item"><a href="/project-details" style={{color:"white"}}>Enrollment</a></li>
                                         <li class="menu-item" ><a href="/service-details" style={{color:"white"}}>Be an Instructor</a></li>
                                         <li class="menu-item" ><a href="/contact" style={{color:"white"}}>Contact Us</a></li>
    </ul>
                    </Col>
                    <Col md={3}  style={{marginLeft:"100px"}}>
                    <h3 class="widget_title" style={{color:"white"}}>Address</h3>
                    <ul>
                                                     <li><i class="fa fa-map-marker" aria-hidden="true"></i>
                                                <span style={{color:"white"}}>13 Madison Street NewYork, USA</span>
                                                </li>
                                                 <li><i class="fa fa-envelope" aria-hidden="true"></i>
                                                 <span style={{color:"white"}}>builderrine@gmail.com</span></li>
                                                 <li><i class="fa fa-clock-o" aria-hidden="true"></i>
                                                 <span style={{color:"white"}}>Monday - Friday (9.00am - 9.00pm)</span></li></ul>
                    </Col>
                </Row>
            </Container>
            </>   
           
    );
};

export default Footer;
