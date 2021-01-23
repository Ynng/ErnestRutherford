import React from "react";
import ReactDOM from "react-dom";
import {
  Container,
  Row,
  Col,
  Image,
  Jumbotron,
  Card,
  Button,
} from "react-bootstrap";
import background from "./images/chemistry-doodle-childrens-plain-1.jpg";

function Citation() {
  return (
    <>
      <div id="bg" style={{ backgroundImage: `url(${background})` }} />
      <Container id="main-container">
        <Row>
          <Col>
            <h1>Citations</h1>
          </Col>
          <Col xs="1">
            <a className="btn btn-primary" href="/">
              Back
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="hanging">
              (n.d.). Retrieved January 22, 2021, from
              http://www.rutherfordjournal.org/article020102.html#:~:text=Mt%20Rutherford%20(41%C2%B0%2059,the%20physicist%20Ernest%20Rutherford%20P.R.S.
            </p>
            <p className="hanging">
              (n.d.). Retrieved January 22, 2021, from
              https://www.cs.mcgill.ca/~rwest/wikispeedia/wpcd/wp/e/Ernest_Rutherford.htm
            </p>
            <p className="hanging">
              (n.d.). Retrieved January 22, 2021, from
              https://www2.lbl.gov/abc/wallchart/chapters/03/4.html
            </p>
            <p className="hanging">
              B. (n.d.). Sir Ernest Rutherford [Digital image]. Retrieved
              January 21, 2021, from
              https://loc.gov/pictures/resource/ggbain.36570/
            </p>
            <p className="hanging">
              Birkinshaw, P. (2009, November 27). The buildings of the
              University of Manchester and the Manchester Museum in Oxford Road
              [Digital image]. Retrieved January 21, 2021, from
              https://en.wikipedia.org/wiki/File:The_University_of_Manchester_(with_snow).jpg
            </p>
            <p className="hanging">
              D. (2013, May 18). File:3D anamation of the Rutherford atom.ogv.
              Retrieved January 21, 2021, from
              https://en.wikipedia.org/wiki/File:3D_anamation_of_the_Rutherford_atom.ogv
            </p>
            <p className="hanging">
              Encyclopædia Britannica. (2012). Rutherford atomic model [Digital
              image]. Retrieved January 22, 2021, from
              https://www.britannica.com/biography/Ernest-Rutherford#/media/1/514229/18079
            </p>
            <p className="hanging">
              Ernest Rutherford Physics Building - View from University [Digital
              image]. (1977). Retrieved January 22, 2021, from
              https://cac.mcgill.ca/campus/buildings/Rutherford_Physics.html
            </p>
            <p className="hanging">
              Ernest Rutherford. (2020, June 17). Retrieved January 22, 2021,
              from https://www.biography.com/scientist/ernest-rutherford
            </p>
            <p className="hanging">
              Ernest Rutherford. (2021, January 11). Retrieved January 22, 2021,
              from https://www.britannica.com/biography/Ernest-Rutherford
            </p>
            <p className="hanging">
              JabberWok. (2007, February 23). File:Bohr atom model.svg [Digital
              image]. Retrieved January 22, 2021, from
              https://en.wikipedia.org/wiki/File:Bohr_atom_model.svg
            </p>
            <p className="hanging">
              Kurzon. (2009, October 5). Gold foil experiment conclusions
              [Digital image]. Retrieved January 21, 2021, from
              http://large.stanford.edu/courses/2017/ph241/sivulka2/
            </p>
            <p className="hanging">
              Liefting, A. (2011, January 7). File:Statue of Ernest
              Rutherford.JPG [Digital image]. Retrieved January 22, 2021, from
              https://en.wikipedia.org/wiki/File:Statue_of_Ernest_Rutherford.JPG
            </p>
            <p className="hanging">
              Milliman, H. (2019, September 24). Understanding the Bohr Atomic Model.
              Retrieved January 23, 2021, from
              https://blog.prepscholar.com/bohr-model#:~:text=Today%2C%20we%20know%20that%20the,more%20accurate%20quantum%2Dmechanical%20models.
            </p>
            <p className="hanging">
              New Zealand Ministry for Culture and Heritage Te Manatu Taonga.
              (1970, January 01). Rutherford, Ernest. Retrieved January 22,
              2021, from
              https://teara.govt.nz/en/biographies/3r37/rutherford-ernest
            </p>
            <p className="hanging">
              The Nobel Prize in Chemistry 1908. (n.d.). Retrieved January 22,
              2021, from
              https://www.nobelprize.org/prizes/chemistry/1908/rutherford/biographical/
            </p>
            <p className="hanging">
              Quoteresearch, A. (2018, November 26). All Science Is Either
              Physics or Stamp Collecting. Retrieved January 22, 2021, from
              https://quoteinvestigator.com/2015/05/08/stamp/
            </p>
            <p className="hanging">
              S. (2018, June 30). Cavendish Laboratory [Digital image].
              Retrieved January 21, 2021, from
              https://commons.wikimedia.org/wiki/File:Cavendish_Laboratory_-_Free_School_Lane_Cambridge_CB2_3QA.jpg
            </p>
            <p className="hanging">
              Schulich Library of Physical Sciences, Life Sciences, and
              Engineering, McGill University (formerly Macdonald Physics
              Buidling). (n.d.). Retrieved January 22, 2021, from
              https://www.aps.org/programs/outreach/history/historicsites/rutherfordsoddy.cfm
            </p>
            <p className="hanging">
              A Science Odyssey: People and Discoveries: Ernest Rutherford.
              (n.d.). Retrieved January 22, 2021, from
              https://www.pbs.org/wgbh/aso/databank/entries/bpruth.html
            </p>
            <p className="hanging">
              U. (Director). (2018, April 10). Ernest Rutherford Building Tour
              [Video file]. Retrieved January 21, 2021, from
              https://www.youtube.com/watch?v=V5idYo4qjZ8
            </p>
            <p className="hanging">
              Unknown. (2014, October 6). File:Ernest Rutherford 1905.jpg
              [Digital image]. Retrieved January 22, 2021, from
              https://en.wikipedia.org/wiki/File:Ernest_Rutherford_1905.jpg
            </p>
          </Col>
        </Row>
      </Container>
      <footer className="site-footer">
        <p>
          Made by <a href="https://www.ynng.ca">Kevin Huang</a> for a Grade 12
          Chemistry class.
        </p>
      </footer>
    </>
  );
}
export default Citation;
