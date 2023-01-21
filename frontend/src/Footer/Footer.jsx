import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        borderBottom: "2px solid black",
        padding: "1px",
        color: "white",
      }}
    >
      <Container>
        <Row>
          <Col>Copyright &copy; StoreNotes</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
