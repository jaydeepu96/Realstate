import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../ComponentCss/Navig.css";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

function Navig() {
  const [showDropdown, setShowDropdown] = useState(false);
  let HeaderData = [
    { home: ["home1", "home2", "home3"] },
    { page: ["about", "team", "quotation"] },
  ];
  return (

    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ height: "100px" }}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="https://shtheme.org/demosd/excelsurewp/wp-content/uploads/2021/05/logo-excelsure.png"></img>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        <Navbar.Collapse id="navbarScroll">
          {HeaderData.map((item, index) => {
            const key = Object.keys(item)[0];
            const values = item[key];

            return (
              <Nav
                key={index}
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "90px" }}
                navbarScroll
                onMouseEnter={() => setShowDropdown(index)}
                onMouseLeave={() => setShowDropdown(null)}
              >
                <NavDropdown
                  title={`${key}+`}
                  id={`navbarScrollingDropdown-${index}`}
                  show={showDropdown === index}
                >
                  {values.map((value, subIndex) => (
                    <NavDropdown.Item href={`#${value}`} key={subIndex}>
                      {value}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </Nav>
            );
          })}

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "90px" }}
            navbarScroll
          >
            <NavDropdown title="PAGE+" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#about"> ABOUT</NavDropdown.Item>
              <NavDropdown.Item href="#team"> TEAM</NavDropdown.Item>
              <NavDropdown.Item href="#quotation"> QUOTATION</NavDropdown.Item>
              <NavDropdown.Item href="#faq"> FAQ</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "90px", color: "#F8A555" }}
            navbarScroll
          >
            <NavDropdown title="SERVICES+" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#services">SERVICES </NavDropdown.Item>
              <NavDropdown.Item href="#services details">
                {" "}
                SERVICE DETAILS
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav.Link href="#pricing">PRICING</Nav.Link>

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "90px" }}
            navbarScroll
          >
            <NavDropdown title="BLOG+" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#blog list">BLOG LIST</NavDropdown.Item>
              <NavDropdown.Item href="#blog details">
                BLOG DETAILS
              </NavDropdown.Item>
              <NavDropdown.Item href="#blog grid">BLOG GRID</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
          <Button variant="get quotes" className="btn">
            GET QUOTES
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>





  );
}

export default Navig;
