import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault(); // 페이지가 계속 리프레시 되는 것을 방지
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
  };

  return (
    <div className="contact-form">
      <Form onSubmit={addContact}>
        {/* 버튼 type이 submit일 경우에 onClick 대신 onSubmit 사용 */}
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>
            <b>이름</b>
          </Form.Label>
          <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(event) => setName(event.target.value)} />
          {/* Form에 입력한 이름을 가져옴 */}
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>
            <b>전화번호</b>
          </Form.Label>
          <Form.Control type="text" placeholder="전화번호를 입력해주세요" onChange={(event) => setPhoneNumber(event.target.value)} />
          {/* Form에 입력한 전화번호를 가져옴 */}
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          추가
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
