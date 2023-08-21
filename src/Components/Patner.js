import React from 'react'
import { Container } from 'react-bootstrap';
import pat1Img from '../Assets/pat1.png';
import pat2Img from '../Assets/pat1.png';
import pat3Img from '../Assets/pat1.png';
import pat4Img from '../Assets/pat1.png';
import pat5Img from '../Assets/pat1.png';
import pat6Img from '../Assets/pat1.png';

const Patner = () => {
  return (
   <>
   {/* <Container>
    <Ro>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
    </Ro>
   </Container> */}
   <div class="patner" style={{alignItems: "center",
    display: "flex",
    justifyContent: "space-around",
    position: "relative",background: "#ffa903"}}>
    <div class="patner_image">
        <img src={ pat1Img} alt=""/></div>
        <div class={pat2Img}><img src={pat2Img} alt=""/></div>
        <div class=''><img src={pat3Img} alt=""/></div>
        <div class=''><img src={pat4Img} alt=""/></div>
        <div class=''><img src={pat5Img} alt=""/></div>
        <div class=''><img src={pat6Img} alt=""/></div>
        </div>
   </>
  )
}

export default Patner