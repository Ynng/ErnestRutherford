import { Container, Row, Col, Image, Jumbotron, Card, Button } from "react-bootstrap";
import MyImage from "./components/MyImage";
import GMap from "./components/GMap";

//Images
import background from "./images/chemistry-doodle-childrens-plain-1.jpg";
import cavendish from "./images/Cavendish-compressed.jpg";
import cavendishori from "./images/Cavendish.jpg";
import mcgill from "./images/McGill.jpg";
import mcgillphysics from "./images/Mcgill-physics-rutherford.jpg";
import manchester from "./images/Manchester-compressed.jpg";
import atomvid from "./videos/Rutherford model - Wikiwand.mp4";
import ruthvsthom from "./images/Geiger-Marsden_experiment_expectation_and_result.jpg";
import cake from "./images/Bohr_atom_model.jpg";
import statue from "./images/Statue_of_Ernest_Rutherford.jpg";
import idk from "./images/Rutherford at McGill.jpg";
import model from "./images/model-Diagram-Rutherford-atom-nucleus-space-electrons.jpg";


function App() {
  return (
    <>
      <div id="bg" style={{ backgroundImage: `url(${background})` }} />
      <Container fluid id="main-container">
        <Container>
          <Row className="hero">
            <Col xs="8">
              <h4 data-aos="fade-in" className="mb-0">Nuclear Physicist/Nuclear Chemist</h4>
              <h1 data-aos="fade-in" id="title-text">
                Ernest Rutherford
              </h1>
              <h6 data-aos="fade-in"> - All science is either physics or stamp collecting. </h6>
            </Col>
            <Col xs="4">
              <MyImage
                src="https://i.imgur.com/yw11oY3.jpg"
                shadow
                rounded
                fluid
                alt="B. (n.d.). Sir Ernest Rutherford [Digital image]. Retrieved January 21, 2021, from https://loc.gov/pictures/resource/ggbain.36570/"
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
        <div className="row school row-with-alt" style={{ backgroundImage: `url(${cavendish})` }} alt="S. (2018, June 30). Cavendish Laboratory [Digital image]. Retrieved January 21, 2021, from https://commons.wikimedia.org/wiki/File:Cavendish_Laboratory_-_Free_School_Lane_Cambridge_CB2_3QA.jpg">
          <Col xs="2" />
          <Col>
            <p data-aos="fade-up" className="text-light text-center">He was awarded an research fellowship in 1851 for postgraduate study at the Cavendish Laboratory, <strong>Cambridge University</strong>, England, under J.J. Thomson.</p>
          </Col>
          <Col xs="2" />
        </div>
        <div className="row school row-with-alt" style={{ backgroundImage: `url(${mcgillphysics})` }} alt="Ernest Rutherford Physics Building - View from University [Digital image]. (1977). Retrieved January 22, 2021, from https://cac.mcgill.ca/campus/buildings/Rutherford_Physics.html">
          <Col xs="2" />
          <Col>
            <p data-aos="fade-up" className="text-light text-center">Recommended by J.J. Thomson, he took a position at <strong>McGill University</strong>, Canada, in 1898.
            </p>
          </Col>
          <Col xs="2" />
        </div>
        <div className="row school row-with-alt" style={{ backgroundImage: `url(${manchester})` }} alt="Birkinshaw, P. (2009, November 27). The buildings of the University of Manchester and the Manchester Museum in Oxford Road [Digital image]. Retrieved January 21, 2021, from https://en.wikipedia.org/wiki/File:The_University_of_Manchester_(with_snow).jpg">
          <Col xs="2" />
          <Col>
            <p data-aos="fade-up" className="text-light text-center">He then moved in 1907 to the <strong>University of Manchester</strong>, taking the <strong>chair of physics</strong>, where he performed his most famous work, and his greatest contribution to physics and chemistry...
            </p>
          </Col>
          <Col xs="2" />
        </div>
        <div className="row rutherford-model row-with-alt" alt="D. (2013, May 18). File:3D anamation of the Rutherford atom.ogv. Retrieved January 21, 2021, from https://en.wikipedia.org/wiki/File:3D_anamation_of_the_Rutherford_atom.ogv">
          <video autoPlay loop src={atomvid} className="video-bg"></video>
          <Col>
            <h2 data-aos="fade-up" className="text-center">The discovery of the atomic nucleus and the formulation of the Rutherford model of the atom in 1911.
            </h2>
          </Col>
        </div>
        <Row className="model">
          <Col xs="1" />
          <Col xs="5">
            <MyImage src={ruthvsthom}
              shadow
              rounded
              fluid
              alt="Kurzon. (2009, October 5). Gold foil experiment conclusions [Digital image]. Retrieved January 21, 2021, from http://large.stanford.edu/courses/2017/ph241/sivulka2/"
              data-aos="zoom-in" />
          </Col>
          <Col xs="5" className="center-vertically">
            <p data-aos="fade-right">
              <strong>Rutherford</strong>, along with <strong>Ernest Marsden</strong> and <strong>Hans Geiger</strong>, carried out the “Geiger-Marsden experiment”,  or what we call the “<strong>gold foil experiment</strong>”, in 1909.
            </p>
            <p data-aos="fade-right">
              Prior to this experiment, J.J. Thomson's "plum pudding model," in which the atom is modeled as a positively charged sphere littered with electrons, was the most popular theory of the structure of the atom. According to this model, there is no "solid matter" at the atomic scale. If an alpha particle collides with an atom, it will pass through the atom.
              </p>
            <p data-aos="fade-right">
              Rutherford was surprised to find that during the experiment, <strong>some alpha particles bounced off the gold foil</strong> instead. After further experiments and calculations, Rutherford concluded that Thomson’s model was indeed wrong. Instead of a large volume of positive charge, it was concentrated in the center of the atom, or what he called the "nucleus", with most of the rest being empty space, except for electrons.
            </p>
            <p data-aos="fade-right">These discoveries lead to the creation of the Rutherford model of the atom. </p>
          </Col>
          <Col xs="1" />
        </Row>
        <Row className="mb-5">
          <Col xs="1" />
          <Col>
            <p data-aos="fade-left">
              Although we have moved on from the Rutherford model, it plays a key role in our understanding of the world at the atomic scale.
            </p>
            <p data-aos="fade-left">
              Only 2 years after the creation of the Rutherford model, Rutherford himself, together with Niels Bohr, created the more accurate <strong>Bohr-Rutherford model</strong>. It puts electrons into different energy levels and shells and is able to explain more things such as the photoelectric effect and emission lines.
            </p>
            <p data-aos="fade-left">
              Despite the existence of more accurate quantum physical models of the atom, the Bohr-Rutherford model of the atom is still taught to students as an introduction to the world of chemistry because of its simplicity.
            </p>
            <p data-aos="fade-left">
              Throughout high school chemistry, we have used the Bohr-Rutherford model of the atom to explain the chemical properties of atoms. By looking at the Bohr-Rutherford diagram for each element, we determined the number of valence electrons and the number of full shells for each element, and from there, trends in the periodic table such as electronegativity and reactivity.
            </p>
            <p data-aos="fade-left">
              During <strong>Unit 2 – Atomic Structure and Bonding</strong> in this year’s Grade 12 University level Chemistry, we used the Bohr-Rutherford model of the atom to explain emission lines and learned about energy level diagrams. The distinct shells served as a good visualization for energy levels and explanation for emission spectrums, although energy levels were mostly the work Niels Bohr, not Rutherford.
            </p>
            <p data-aos="fade-in">
              Later we were introduced to the quantum model of the atom, but the Bohr-Rutherford model served as a good introduction.
            </p>
          </Col>
          <Col xs="3">
            <MyImage src={model}
              shadow
              rounded
              fluid
              alt="Encyclopædia Britannica. (2012). Rutherford atomic model [Digital image]. Retrieved January 22, 2021, from https://www.britannica.com/biography/Ernest-Rutherford#/media/1/514229/18079"
              data-aos="zoom-in"
            />
            <MyImage src={cake}
              shadow
              rounded
              fluid
              alt="JabberWok. (2007, February 23). File:Bohr atom model.svg [Digital image]. Retrieved January 22, 2021, from https://en.wikipedia.org/wiki/File:Bohr_atom_model.svg"
              data-aos="zoom-in"
              margin
            />
          </Col>
          <Col xs="1" />
        </Row>
        <Container className="mt-5">
          <Row className="mb-5">
            <Jumbotron className="shadow" data-aos="zoom-in">
              <h1>Legacy</h1>
              <p>Rutherford's discoveries and contributions go beyond his atomic model. He also discovered the concept of radioactive half-life, the element radon, and distinguished and named alpha, beta, and gamma particles and classified them according to their ability to penetrate matter.</p>
              <p>
                His work may not be immediately useful, but his understanding of atoms and radiation pioneered nuclear physics and paved the way for others to go further in these fields.
              </p>
            </Jumbotron>
          </Row>
          <Row className="mt-5 mb-3">
            <Col>
              <h1 className="text-center" data-aos="zoom-in">Additional Information</h1>
            </Col>
          </Row>
          <Row>
            <Col xs="4" data-aos="fade-up">
              <Card className="h-100">
                <MyImage src={statue} className="card-img-top" alt="Liefting, A. (2011, January 7). File:Statue of Ernest Rutherford.JPG [Digital image]. Retrieved January 22, 2021, from https://en.wikipedia.org/wiki/File:Statue_of_Ernest_Rutherford.JPG" />
                <Card.Body>
                  <Card.Title>Fun Fact 1</Card.Title>
                  <Card.Text>
                    His first name was mistakenly spelled 'Earnest' when his birth was registered.
                  </Card.Text>
                  <footer className="blockquote-footer">
                    New Zealand Ministry for Culture and Heritage Te Manatu Taonga. (1970, January 01). Rutherford, Ernest. Retrieved January 22, 2021, from https://teara.govt.nz/en/biographies/3r37/rutherford-ernest
                  </footer>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="4" data-aos="fade-up">
              <Card className="h-100">
                <MyImage variant="top" className="card-img-top" src={cavendishori} alt="S. (2018, June 30). Cavendish Laboratory [Digital image]. Retrieved January 21, 2021, from https://commons.wikimedia.org/wiki/File:Cavendish_Laboratory_-_Free_School_Lane_Cambridge_CB2_3QA.jpg" />
                <Card.Body>
                  <Card.Title>Fun Fact 2</Card.Title>
                  <Card.Text>
                    He was one of the first people without a Cambridge degree allowed to do research at the University of Cambridge under the leadership of J. J. Thomson.
                  </Card.Text>
                  <footer className="blockquote-footer">
                    Schulich Library of Physical Sciences, Life Sciences, and Engineering, McGill University (formerly Macdonald Physics Buidling). (n.d.). Retrieved January 22, 2021, from https://www.aps.org/programs/outreach/history/historicsites/rutherfordsoddy.cfm
                  </footer>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="4" data-aos="fade-up">
              <Card className="h-100">
                <MyImage variant="top" className="card-img-top" src={idk} alt="Unknown. (2014, October 6). File:Ernest Rutherford 1905.jpg [Digital image]. Retrieved January 22, 2021, from https://en.wikipedia.org/wiki/File:Ernest_Rutherford_1905.jpg" />
                <Card.Body>
                  <Card.Title>Fun Fact 3</Card.Title>
                  <Card.Text>
                    He performed the first artificially induced nuclear reaction.
                  </Card.Text>
                  <footer className="blockquote-footer">
                    A Science Odyssey: People and Discoveries: Ernest Rutherford. (n.d.). Retrieved January 22, 2021, from https://www.pbs.org/wgbh/aso/databank/entries/bpruth.html
                  </footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="row school row-with-alt mt-5" style={{ backgroundImage: `url(${mcgill})` }} alt="U. (Director). (2018, April 10). Ernest Rutherford Building Tour [Video file]. Retrieved January 21, 2021, from https://www.youtube.com/watch?v=V5idYo4qjZ8" data-aos="fade-up" >
            <Col xs="2" />
            <Col className="flex-center">
              <p data-aos="fade-up" className="text-light text-center">
                Ernest Rutherford had <strong>at least one</strong> building named after him at every university he has been to.
              </p>
              <p data-aos="fade-up" className="text-light text-center">
                This one is at the University of Canterbury
              </p>
              <a className="btn btn-info" href="https://www.youtube.com/watch?v=V5idYo4qjZ8">
                Get a tour of this building
              </a>
            </Col>
            <Col xs="2" />
          </div>
        </Container>
      </Container>
      <footer className="site-footer">
        <p>Made by <a href="https://www.ynng.ca">Kevin Huang</a> for a Grade 12 Chemistry class.
        </p>
        <p>© 2021 Kevin Huang</p>
      </footer>
    </>
  );
}

export default App;
