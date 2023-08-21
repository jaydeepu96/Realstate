import React from 'react'
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import newsImg from '../Assets/news.png';
import newImg from '../Assets/new.png';
import b6Img from '../Assets/b6.png'

const Ourlatestnews = () => {
  return (
    <>
   <Container style={{backgroundColor:"#00326f"}}>
        <Row>
          <Col md={4} style={{marginLeft:"100px"}}><Card style={{ width: '18rem',}} >
      <Card.Body>
        <Card.Title style={{color:"#ffa903",fontSize:"16px"}}>LATEST NEWS</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{color:"#fff"}}>Our Latest News</Card.Subtitle>
        <Card.Text style={{color:"#fff"}}>
        Builderrine is the best construction company. It has best team who are provideing best service possible.
        </Card.Text>
        <Button  style={{marginBottom:"20px"}}>Learn More</Button>
       
      </Card.Body>
    </Card></Col>
        <Col md={4}><Card style={{ width: '18rem',padding:"20px" }}>
      <Card.Img variant="top" src={newImg} />
      <Card.Body>
        <Card.Title style={{color:"white"}}>Diversity in Building Celebrated by Builderrine</Card.Title>
        <Card.Text style={{color:"white"}}>
        Builderrine will connect with 10000 people from 90 companies who work on its’ projects each day...
        </Card.Text >
        <Button variant="primary" style={{color:"white",marginBottom:"50px"}}>READ ARTICLE</Button>
      </Card.Body>
    </Card></Col>

        <Col md={4}><Card style={{ width: '18rem',padding:"20px" }}>
      <Card.Img variant="top" src={b6Img} />
      <Card.Body>
        <Card.Title style={{color:"white"}}>Diversity in Building Celebrated by Builderrine</Card.Title>
        <Card.Text style={{color:"white"}}>
        Builderrine will connect with 10000 people from 90 companies who work on its’ projects each day...
        </Card.Text >
        <Button variant="primary" style={{color:"white",marginBottom:"50px"}}>READ ARTICLE</Button>
      </Card.Body>
    </Card></Col>
    
        
        </Row>
    </Container> 

      
                 

    </>
  )
}

export default Ourlatestnews