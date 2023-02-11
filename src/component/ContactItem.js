import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = () => {
  return (
    <div className="contact-item">
      <Row>
        <Col lg={2}>
          <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg" />
        </Col>
        <Col lg={10}>
        <div>김정훈</div>
        <div>01012345678</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
