import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Prize from "../../Assets/Prize.png";
import Banner from "../../Assets/boy-won-lottery-while-playing-wheel-of-fortune.svg";

const Home = () => {
  return (
    <div>
      <Container fluid className="home__banner">
        <Container className="py-5">
          <Row className="mainrow">
            <Col md={8} xs={12}>
              <h1>
                Play, Dream, Win!
                <br />
                Your Ticket to Jackpot Joy!
              </h1>
              <p className="mt-3">
                Turn dreams into reality. Play now and seize the joy of winning
                jackpots!
                <br />
                What are you waiting for? Try your luck now!
              </p>

              <button className="p-3 px-5">Purchase Now</button>
            </Col>
            <Col xs={4}
                className="d-flex justify-content-end"
            >
              <img src={Banner} className="bannerimg" alt="" />
            </Col>
          </Row>
          {/* <Row>
                    <Col md={4} xs={12}>
                        <div className="abc">
                            <span>
                                Last Draw
                            </span>
                            <p>
                                0000
                            </p>
                        </div>
                  </Col>
                
                </Row> */}

          <div className="w-100 d-flex justify-content-center mt-5">
            <div className="d-flex">
              <div className="prize-box">
                <Row className="pe-2 ps-3 p-2">
                  <Col xs={3} className="pe-2">
                    <img src={Prize} alt="" />
                  </Col>
                  <Col className="ps-4">
                    <div className="abc">
                      <span>First Prize</span>
                      <p>AED 3000</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="prize-box">
                <Row className="pe-2 ps-3 p-2">
                  <Col xs={3} className="pe-2">
                    <img src={Prize} alt="" />
                  </Col>
                  <Col className="ps-4">
                    <div className="abc">
                      <span>First Prize</span>
                      <p>AED 3000</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="prize-box">
                <Row className="pe-2 ps-3 p-2">
                  <Col xs={3} className="pe-2">
                    <img src={Prize} alt="" />
                  </Col>
                  <Col className="ps-4">
                    <div className="abc">
                      <span>First Prize</span>
                      <p>AED 3000</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>
      </Container>
      <Container fluid className="marquee ">
        <Container className="d-flex justify-content-center">
             <p className="mt-3">
                All  Our  Purchased  Products  will  be  Donated  through  our  Partners  to  the  Needy.
                </p>
        </Container>
               
      </Container>
      <Container fluid className="second ">
        <Container className="">
             
        </Container>
               
      </Container>
    </div>
  );
};

export default Home;
