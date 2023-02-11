import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const SearchBox = () => {
  return (
    <Row className="search-box">
      <Col lg={8}>
        <Form.Control type="text" placeholder="이름" />
      </Col>
      <Col>
        <Button lg={4} variant="primary" type="submit">
          찾기
        </Button>
      </Col>
    </Row>
  );
};

export default SearchBox;
