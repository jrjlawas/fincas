// import aboutImg1 from "@/assets/img/about/vl-about-4.1.png";
import aboutImg1 from "@/assets/img/Fincas/home/About1.svg";
import aboutImg2 from "@/assets/img/Fincas/home/About2.svg";

import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
const About = () => {
  return (
    <section id="about" className="vl-about4 sp2">
      <Container>
        <Row className=" flex-lg-row flex-column-reverse">
          <Col lg={6}>
            <div className="vl-about-thumb mb-30">
              <Row className="">
                <Col lg={6} md={6}>
                  <div className="thumb-1 mb-30 reveal">
                    <img
                      className="w-100 img-fluid"
                      src={aboutImg1}
                      alt="aboutImg1"
                    />
                  </div>
                </Col>
                <Col lg={6} md={6}>
                  <div className="thumb-2">
                    <img
                      className="thmb2 reveal w-100"
                      src={aboutImg2}
                      alt="aboutImg2"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <div className="vl-about-content mb-30 ml-50">
              <div className="vl-section-title4">
                <h5
                  className="subtitle"
                  data-aos="fade-left"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  About FINCAS
                </h5>
                <h2 className="title text-anime-style-3">
                  Global Experts in Procurement, Supply Chain & Project Services
                </h2>
                <p
                  className="para pb-32"
                  data-aos="fade-left"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  Founded in May 2020, FINCAS Management Services Ltd is a
                  global consulting company delivering sustainable Procurement
                  and Supply Chain solutions that drive measurable value. We
                  specialize in serving the Mining, Resources, Mega Project, and
                  Oil & Gas industries, combining deep sector expertise with a
                  hands-on, results-driven approach.
                </p>
              </div>
              <Row className="">
                <Col
                  lg={12}
                  md={6}
                  data-aos="fade-left"
                  data-aos-duration={900}
                  data-aos-delay={300}
                >
                  <div className="vl-about-icon-box mb-30">
                    <div className="vl-icon-content">
                      <h3 className="title">
                        <Link to="#">Our Visions</Link>
                      </h3>
                      <p>
                        “To deliver sustainable solutions and ongoing value
                        through strong relationships and customer respect.”
                      </p>
                    </div>
                  </div>
                </Col>
                {/* <Col
                  lg={12}
                  md={6}
                  data-aos="fade-left"
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  <div className="vl-about-icon-box mb-30">
                    <div className="vl-about-icon">
                      <span>
                        <img src={about2} alt="about2" />
                      </span>
                    </div>
                    <div className="vl-icon-content">
                      <h3 className="title">
                        <Link to="#">
                          Putting people first in everything we do
                        </Link>
                      </h3>
                      <p>
                        Guided by compassion driven the belief that every act
                        kindness makes a difference.
                      </p>
                    </div>
                  </div>
                </Col> */}
              </Row>
              <div
                className="btn-area4"
                data-aos="fade-left"
                data-aos-duration={1100}
                data-aos-delay={300}
              >
                <Link to="/contact" className="header-btn1">
                  Learn More{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
