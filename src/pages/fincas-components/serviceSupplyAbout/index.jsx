import { Col, Container, Row } from "react-bootstrap";
import IMG1 from "@/assets/img/Fincas/services/aboutE2E.svg";
const ServiceSupplyAbout = () => {
  return (
    <>
      <div className="vl-sidebar-area sp2">
        <Container>
          <Row>
            <Col lg={12} className="mx-auto">
              <div className="event-content-area">
                <h2 className="title pt-5">
                  E2E Procurement & Supply Chain Training
                </h2>
                <br></br>
                <p
                  className="para"
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "1.8",
                    textAlign: "justify",
                  }}
                >
                  Full end to end Procurement and Supply Chain design, modeling,
                  improvements, policies, processes, procedures, standards,
                  guidelines, contract suites, and activity specific templates
                  can be created, rolled out and supported by quality training
                  to ensure the business objectives are properly embedded. My
                  approach to this is very much a top-down approach meaning I
                  have a comprehensive suite of leading practice tools and
                  templates which can be streamlined to suite your business in a
                  very time and cost-efficient manner, rather than having to
                  create them from scratch. These can be aligned with your
                  business design, document hierarchy, and referencing all
                  interdependencies and linked documents from other areas,
                  departments or procurement processes.
                </p>
                <br></br>
                <div style={{ textAlign: "center", marginTop: "3rem" }}>
                  <img
                    src={IMG1}
                    alt="Expat Support Services"
                    style={{
                      width: "100%",
                      maxWidth: "800px",
                      borderRadius: "12px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#555",
                      marginTop: "1rem",
                      fontStyle: "italic",
                    }}
                  >
                    “From sourcing to delivery, FINCAS empowers your teams with
                    the tools, knowledge, and confidence to transform
                    procurement performance.”
                  </p>
                </div>
                <br></br>
                <p
                  className="para"
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "1.8",
                    textAlign: "justify",
                  }}
                >
                  This is an extremely cost-effective way to modernize your
                  department implement but more importantly understand
                  compliance, governance expectations and ensure your teams
                  embrace these key drivers of success. Larger consulting firms
                  look at multiple layered resourcing and extended time and cost
                  to deliver these services, my commitment is to deliver quality
                  leading practice solutions in a far more efficient and
                  cost-effective manner.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      ;
    </>
  );
};
export default ServiceSupplyAbout;
