import React from "react";
import { Col, Row } from "react-bootstrap";
function Header() {
  return (
    <Row className="header-row">
      <Col>
        <h1 className="header-text">ToDo List</h1>
      </Col>
    </Row>
  );
}
export default Header;
