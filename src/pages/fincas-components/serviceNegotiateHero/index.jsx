import contactBg from "@/assets/img/Fincas/services/heroProcurement.svg";
import { FaAngleRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
const ServiceNegotiateHero = () => {
  return (
    <section
      className="vl-breadcrumb"
      style={{
        backgroundImage: `url(${contactBg})`,
      }}
    >
      <Container>
        <Row>
          <Col lg={12}>
            <div className="vl-breadcrumb-title">
              <h2 className="heading">Negotiation Strategy & Training</h2>
              <div className="vl-breadcrumb-list">
                <span>
                  <Link to="/">Home</Link>
                </span>
                <span className="dvir">
                  <FaAngleRight className="fa-solid fa-angle-right" />
                </span>
                <span>
                  <a className="active" href="#">
                    Service Offering
                  </a>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default ServiceNegotiateHero;
