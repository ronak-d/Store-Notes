import Button from "react-bootstrap/Button";
import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";

import styles from "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div>
            <div style={{ margin: "50px" }}>
              <h3>Welcome</h3>
              <h3>Write Your Notes with StoreNotes</h3>
            </div>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col style={{}} xs lg="4">
                <Button
                  style={{ margin: "20px  20px", color: "black" }}
                  size="sm"
                  variant="outline-primary"
                >
                  Login
                </Button>
                <Button
                  style={{ margin: "20px  20px", color: "black" }}
                  size="sm"
                  variant="outline-primary"
                >
                  Sign Up
                </Button>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
