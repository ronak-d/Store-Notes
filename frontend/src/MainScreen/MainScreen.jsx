import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./MainScreen.css";
import Button from "react-bootstrap/Button";

const MainScreen = ({ title, children }) => {
  return (
    <div className="mainFrame">
      <Container>
        <Row>
          <div className="page">
            {title && (
              <>
                <p className="heading">{title}</p>
                <hr />
              </>
            )}

            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
