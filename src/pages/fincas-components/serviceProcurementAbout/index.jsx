import aboutThum1 from "@/assets/img/Fincas/services/aboutProcurement1.svg";
import aboutThum2 from "@/assets/img/Fincas/services/aboutProcurement2.svg";
import aboutThum3 from "@/assets/img/Fincas/services/aboutProcurement3.svg";

import missionThumbImg from "@/assets/img/Fincas/services/aboutProcurement4.svg";
import vision2 from "@/assets/img/about/vl-vission2.png";
import thumb5 from "@/assets/img/work/vl-work-thumb-5.1.png";
import { FaCheck } from "react-icons/fa6";
import {
  Col,
  Container,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";

const ServiceProcurementAbout = () => {
  return (
    <>
      <section className="vl-about5 sp2">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="vl-about-content">
                <div className="vl-section-title-1 mb-50">
                  {/* <h5 className="subtitle">
                  Driving Efficiency, Innovation, and Strategic Growth
                </h5> */}
                  <h2 className="title">
                    Driving Efficiency, Innovation, and Strategic Growth
                  </h2>
                  <p>
                    At FINCAS Management Services, we help organizations design
                    and implement Procurement and Business Strategies that
                    directly align with their overall business goals. Our
                    approach focuses on cost optimization, risk mitigation, and
                    innovation, ensuring that your procurement and business
                    operations become key enablers of long-term success.
                  </p>
                </div>
                <Row>
                  <Col lg={12} md={6}>
                    <div className="vl-sm-thumb mb-30">
                      <img
                        className="w-100"
                        src={aboutThum1}
                        alt="aboutThum1"
                      />
                    </div>
                  </Col>
                  <Col lg={12} md={6}>
                    <div className="vl-sm-thumb2 mb-30">
                      <img
                        className="w-100"
                        src={aboutThum2}
                        alt="aboutThum2"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6}>
              <div className="vl-about-content2 ml-20">
                <div className="large-thumb mb-30">
                  <img className="w-100" src={aboutThum3} alt="aboutThum3" />
                </div>
                <div className="content mb-30">
                  <p className="para">
                    We develop both short-term and long-term procurement
                    strategies tailored to your organization’s maturity,
                    priorities, and industry landscape. Whether you’re looking
                    to transform your entire procurement function or focus on a
                    specific area, our solutions are designed to deliver
                    measurable results.
                  </p>
                  <div className="icon-list-box box2">
                    <ul>
                      <li>
                        <span>
                          <div className="fa-solid fa-check" />
                        </span>
                        Operational Excellence
                      </li>
                      <li>
                        <span>
                          <div className="fa-solid fa-check" />
                        </span>
                        Organizational Effectiveness
                      </li>
                      <li>
                        <span>
                          <div className="fa-solid fa-check" />
                        </span>
                        Sustainability
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="work" className="vl-work5 sp2">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="vl-work-content mb-30">
                <div className="vl-section-title5">
                  <h5
                    className="subtitle"
                    data-aos="zoom-in-up"
                    data-aos-duration={1200}
                    data-aos-delay={300}
                  >
                    {" "}
                    Core Focus Areas
                  </h5>
                  <h2 className="title text-anime-style-3">
                    FINCAS Strategy and Execution
                  </h2>
                  <p
                    className="para"
                    data-aos="zoom-in-up"
                    data-aos-duration={1200}
                    data-aos-delay={300}
                  >
                    We work alongside policymakers, grassroots organizations,
                    and <br /> international bodies to influence laws, policies,
                    and social norms <br /> that protect human dignity our
                    efforts are fueled by the support.
                  </p>
                </div>
                {/* <div className="vl-work-thumb reveal">
                  <img className="w-100" src={thumb5} alt="thumb5" />
                </div> */}
              </div>
              <Col
                lg={12}
                data-aos="zoom-in-up"
                data-aos-duration={1200}
                data-aos-delay={300}
              >
                <div className="vl-single-work-box active">
                  <div className="work-box-flx">
                    <div className="num">
                      <span>01</span>
                    </div>
                    <div className="content">
                      <h5 className="title">Spend Map Analysis</h5>
                      <p className="para">
                        Understanding your spend to identify cost-saving
                        opportunities and supplier consolidation.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                lg={12}
                data-aos="zoom-in-up"
                data-aos-duration={1200}
                data-aos-delay={300}
              >
                <div className="vl-single-work-box active">
                  <div className="work-box-flx">
                    <div className="num">
                      <span>02</span>
                    </div>
                    <div className="content">
                      <h5 className="title">Category Strategy Development</h5>
                      <p className="para">
                        Building robust sourcing plans aligned with business
                        goals.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                lg={12}
                data-aos="zoom-in-up"
                data-aos-duration={1200}
                data-aos-delay={300}
              >
                <div className="vl-single-work-box active">
                  <div className="work-box-flx">
                    <div className="num">
                      <span>03</span>
                    </div>
                    <div className="content">
                      <h5 className="title">Strategic Sourcing Roadmaps</h5>
                      <p className="para">
                        Designing both short- and long-term sourcing initiatives
                        to drive value.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Col>
            <Col lg={6}>
              <div className="work-box ml-50">
                <Row>
                  <Col
                    lg={12}
                    data-aos="zoom-in-up"
                    data-aos-duration={1200}
                    data-aos-delay={300}
                  >
                    <div className="vl-single-work-box active">
                      <div className="work-box-flx">
                        <div className="num">
                          <span>04</span>
                        </div>
                        <div className="content">
                          <h5 className="title">
                            Contract Management & Supplier Relationship
                            Management (SRM)
                          </h5>
                          <p className="para">
                            Enhancing supplier performance and long-term
                            partnerships.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col
                    lg={12}
                    data-aos="zoom-in-up"
                    data-aos-duration={1200}
                    data-aos-delay={300}
                  >
                    <div className="vl-single-work-box active">
                      <div className="work-box-flx">
                        <div className="num">
                          <span>05</span>
                        </div>
                        <div className="content">
                          <h5 className="title">
                            Inventory Management & Warehouse Optimisation
                          </h5>
                          <p className="para">
                            Improving stock control, reducing waste, and
                            maximizing warehouse efficiency.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col
                    lg={12}
                    data-aos="zoom-in-up"
                    data-aos-duration={1200}
                    data-aos-delay={300}
                  >
                    <div className="vl-single-work-box active">
                      <div className="work-box-flx">
                        <div className="num">
                          <span>06</span>
                        </div>
                        <div className="content">
                          <h5 className="title">Logistics Solutions</h5>
                          <p className="para">
                            Streamlining end-to-end supply chain operations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col
                    lg={12}
                    data-aos="zoom-in-up"
                    data-aos-duration={1200}
                    data-aos-delay={300}
                  >
                    <div className="vl-single-work-box active">
                      <div className="work-box-flx">
                        <div className="num">
                          <span>07</span>
                        </div>
                        <div className="content">
                          <h5 className="title">KPI Development</h5>
                          <p className="para">
                            Establishing performance metrics for both
                            transactional and contractual success.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="vl-about-mission-bg sp2">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <Row className="align-items-center">
                <Col lg={6}>
                  <div className="mision-thumb mb-30">
                    <img
                      className="w-100"
                      src={missionThumbImg}
                      alt="missionThumbImg"
                    />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="mission-content ml-20 mb-30">
                    <h2 className="title pb-20">
                      Systems Implementation & Support
                    </h2>
                    <p className="para pb-16">
                      Our expertise extends beyond strategy into execution. With
                      extensive experience leading four SAP implementation
                      projects—from SteerCo representation to SME Lead roles—we
                      provide hands-on support to ensure seamless system
                      integration. Whether you need:
                      <br />
                      <br />
                      SME (Subject Matter Expert) for system deployment,
                      Independent evaluator for optimal ERP system selection, or
                      SteerCo representative for implementation governance
                    </p>

                    <br></br>
                    <p className="para">
                      FINCAS brings the insight, independence, and experience to
                      make your systems transformation a success.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default ServiceProcurementAbout;
