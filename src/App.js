import { Container, Row, Col, Image } from 'react-bootstrap';
import MyImage from './MyImage';
import background from "./images/chemistry-doodle-childrens-plain-1.jpg";
import GMap from "./GMap"

function App() {
  return (
    <>
      <div id="bg" style={{ backgroundImage: `url(${background})` }} />
      <Container fluid id="main-container">
        <Container>
          <Row className="hero">
            <Col xs="8">
              <h1 data-aos="fade-right" id="title-text">Ernest Rutherford</h1>
              <h4 data-aos="fade-up">Nuclear Physics/Nuclear Chemistry</h4>
            </Col>
            <Col xs="4">
              <MyImage src="https://i.imgur.com/yw11oY3.jpg" shadow rounded fluid alt="https://loc.gov/pictures/resource/ggbain.36570/" data-aos="fade-left" />
            </Col>
          </Row>
        </Container>
        <Row>
          <Col xs="8">
            <p data-aos="fade-right"><span className="h3">B</span>orn in</p>
          </Col>
          <Col xs="4">
            <GMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17374801.228340097!2d160.29844082018107!3d-40.913619167532275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3b9821866681d1%3A0x500ef8684796200!2sBrightwater%2C%20New%20Zealand!5e0!3m2!1sen!2sca!4v1611205627209!5m2!1sen!2sca" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
