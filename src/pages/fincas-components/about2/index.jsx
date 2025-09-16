import aboutIcons1 from "@/assets/img/icons/vl-about-1.1.svg";
import aboutIcons2 from "@/assets/img/icons/vl-about-1.2.svg";
import about1 from "@/assets/img/Fincas/home/About3.svg";
import about2 from "@/assets/img/Fincas/home/About4.svg";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
const About = () => {
  return (
    <section id="about" className="vl-about-section sp2">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="vl-about-content">
              <div className="vl-section-title-1">
                <h5
                  className="subtitle"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  Leadership at FINCAS
                </h5>
                <h2 className="title text-anime-style-3">
                  Guided by Industry Expertise and a Vision for Sustainable
                  Solutions
                </h2>
                <p
                  className="pb-32"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  Led by Steven Cox, FINCAS leverages global procurement and
                  supply chain expertise to deliver sustainable solutions,
                  strong partnerships, and measurable results.
                </p>
              </div>
              <div className="vl-about-grid">
                <div className="vl-about-icon-box mb-30">
                  {/* <div className="vl-about-icon">
                    <span>
                      <img src={aboutIcons1} alt="about1" />
                    </span>
                  </div> */}
                  <div className="vl-icon-content">
                    <h3 className="title">
                      <Link to="#">Strategic Direction</Link>
                    </h3>
                    <p>
                      Steven Cox sets the vision and guides FINCAS toward
                      innovative, sustainable procurement and supply chain
                      practices.
                    </p>
                  </div>
                </div>
                <div className="vl-about-icon-box mb-30">
                  {/* <div className="vl-about-icon">
                    <span>
                      <img src={aboutIcons2} alt="about2" />
                    </span>
                  </div> */}
                  <div className="vl-icon-content">
                    <h3 className="title">
                      <Link to="#">Client-Centered Excellence</Link>
                    </h3>
                    <p>
                      Under his leadership, we prioritize transparency,
                      collaboration, and measurable impact for every client
                      engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-30">
            <div className="vl-about-large-thumb reveal">
              <img className="w-100" src={about1} alt="about1" />
            </div>
          </Col>
          <Col lg={2} md={6} className="mb-30">
            <div
              className="vl-about-sm-content"
              data-aos="zoom-in-up"
              data-aos-duration={1000}
              data-aos-delay={300}
            >
              <p>
                FINCAS Management Services Ltd, registered with BVI FSC, upholds
                international standards ensuring transparency, professionalism,
                regulatory compliance, and global credibility.
              </p>
              {/* <div className="btn-area">
                <Link to="/pages/team" className="header-btn1">
                  Volunteer{" "}
                  <span>
                    <FaArrowRight />
                  </span>
                </Link>
              </div> */}
              <div className="vl-about-sm-thumb d-none d-md-block">
                <img className="w-100" src={about2} alt="about2" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
