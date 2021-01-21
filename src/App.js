import { Container, Row, Col, Image } from "react-bootstrap";
import MyImage from "./components/MyImage";
import GMap from "./components/GMap";

//Images
import background from "./images/chemistry-doodle-childrens-plain-1.jpg";
import cavendish from "./images/Cavendish-compressed.jpg";
import mcgill from "./images/McGill.jpg";

function App() {
  return (
    <>
      <div id="bg" style={{ backgroundImage: `url(${background})` }} />
      <Container fluid id="main-container">
        <Container>
          <Row className="hero">
            <Col xs="8">
              <h1 data-aos="fade-in" id="title-text">
                Ernest Rutherford
              </h1>
              <h4 data-aos="fade-in">Nuclear Physics/Nuclear Chemistry</h4>
            </Col>
            <Col xs="4">
              <MyImage
                src="https://i.imgur.com/yw11oY3.jpg"
                shadow
                rounded
                fluid
                alt="https://loc.gov/pictures/resource/ggbain.36570/"
                data-aos="fade-in"
              />
            </Col>
          </Row>
        </Container>
        <Row className="birthplace">
          <Col xs="2" />
          <Col xs="4">
            <p data-aos="fade-right">
              Ernest Rutherford was born on August 30, 1871 in <strong>Brightwater</strong>, New
              Zealand.
            </p>
            <p data-aos="fade-right">
              After studying at Nelson College, New Zealand's oldest state secondary school, he was awarded a scholarship to attend Canterbury College at the <strong>University of New Zealand</strong>, where he later earned his B.A., M.A. and B.A. degrees.
            </p>
          </Col>
          <Col xs="4">
            <GMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17374801.228340097!2d160.29844082018107!3d-40.913619167532275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3b9821866681d1%3A0x500ef8684796200!2sBrightwater%2C%20New%20Zealand!5e0!3m2!1sen!2sca!4v1611205627209!5m2!1sen!2sca" />
          </Col>
          <Col xs="2" />
        </Row>
        <div className="row school" style={{ backgroundImage: `url(${cavendish})` }}>
          <Col xs="3" />
          <Col>
            <p data-aos="fade-up" className="text-light text-center">He was awarded an research fellowship in 1851 for postgraduate study at the Cavendish Laboratory, <strong>Cambridge University</strong>, England, under J.J. Thomson.</p>
          </Col>
          <Col xs="3" />
        </div>
        <div className="row school" style={{ backgroundImage: `url(${mcgill})` }}>
          <Col xs="3" />
          <Col>
            <p data-aos="fade-up" className="text-light text-center">Recommended by J.J. Thomson, he took a position at <strong>McGill University</strong>, Canada, in 1898.
            </p>
            <p data-aos="fade-up" className="text-light text-center">A physics building at McGill was later named after him.</p>
          </Col>
          <Col xs="3" />
        </div>
      </Container>
    </>
  );
}

export default App;
