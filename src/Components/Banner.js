import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BannerImage from '../Assets/Banner.jpg'; // Import your banner image
import sliderimgImg from '../Assets/sliderimg.png'
import '../ComponentCss/Banner.css'; // You can add your custom CSS here

const Banner = () => {
    return (
       
                  <div className='cont' >
                 <div className='row' style={{marginTop:"200px",marginLeft:"100px"}}>

                 <div className='col-lg-6'>
                    <h1 style={{ color: "white" }}>CALL US ANYTIME +99 (1234) 56 789</h1>
                    <h2 style={{ color: "white" }}>Where You Find Best Builders</h2>
                    <p  style={{ color: "white" }}>Safe, Reliable and Cost Effective Construction company<br/> We offer best construction Services.</p>
                    <Button variant="primary" style={{ height: "50px", width: "150px", padding: "20px", marginRight: "20px",marginBottom:"50px", color: "white", background: "#ffa903" }}>Learn More</Button>
                </div>
                 

           
         </div>
                


            {/* <Row>
        
            
                <Col>
            <h1 style={{color:"white",marginLeft:"150px",}}>CALL US ANYTIME +99 (1234) 56 789</h1>
            <p style={{color:"white",marginLeft:"50px"}}>Safe, Reliable and Cost Effective Construction company.<br/> We offer best construction Services.</p>    
             <Button variant="primary" style={{height:"50px",width:"150px",padding:"20px",marginLeft:"130px",color:"white",background:"#ffa903"}}>Learn More</Button> 
            </Col>
                </Row> */}
            {/* <Row><Col md={6} style={{ height: "100px" }}><img src={sliderimgImg } alt="Banner" /></Col></Row> */}
         
           
        
</div>

            
            
     

       
   


   




    );
};

export default Banner;
