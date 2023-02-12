import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = ({item}) => {
  return (
    <div className="contact-item">
      <Row>
        <Col lg={2}>
          <img width={50} src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg" />
        </Col>
        <Col lg={10}>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
