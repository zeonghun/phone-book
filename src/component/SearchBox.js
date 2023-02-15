import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const {contactList} = useSelector((state) => state);

  const searchByName=(event)=>{
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  }

  return (
    <Form className="search-box" onSubmit={searchByName}>
      <Row>
        <Col lg={8}>
          <Form.Control type="text" placeholder="이름" onChange={(event) => setKeyword(event.target.value)} />
        </Col>
        <Col>
          <Button lg={4} variant="primary" type="submit">
            찾기
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
