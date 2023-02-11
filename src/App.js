import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";


// 유저는 연락처를 생성할 수 있다
// 연락처에는 이름과 전화번호 정보가 필요하다
// 유저는 연락처 리스트를 볼 수 있다
// 유저는 이름으로 연락처를 검색할 수 있다

function App() {
  return (
    <div>
      <h1 className="title">연 락 처</h1>
      <Container>
        <Row>
          <Col className="border-column">
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
