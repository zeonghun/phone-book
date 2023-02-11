import React from "react";
import { Form, Button } from "react-bootstrap";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label><b>이름</b></Form.Label>
          <Form.Control type="text" placeholder="이름을 입력해주세요" />
        </Form.Group><br/>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label><b>전화번호</b></Form.Label>
          <Form.Control type="text" placeholder="전화번호를 입력해주세요" />
        </Form.Group>
        <br/>

        <Button variant="primary" type="submit">
          추가
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
