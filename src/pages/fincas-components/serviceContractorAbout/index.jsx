import { Col, Container, Row } from "react-bootstrap";

const ServiceContractorAbout = () => {
  return (
    <>
      <div className="vl-sidebar-area sp2">
        <Container>
          <Row>
            <Col lg={12} className="mx-auto">
              <div className="event-content-area">
                <h2 className="title pt-5">Contractor Management Solutions</h2>
                <br></br>
                <p
                  className="para"
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "1.8",
                    textAlign: "justify",
                  }}
                >
                  Contractor management is the structured process of selecting,
                  onboarding, monitoring, and evaluating independent
                  contractors, vendors, and third-party service providers to
                  ensure they meet organizational standards, safety
                  requirements, and performance or project goals. It involves
                  comprehensive administrative tasks like performance
                  management, absolute transparency on the accountabilities of
                  every stakeholder (both internally and externally), cross
                  functional collaboration, contract compliance, aiming to
                  reduce risks, increase efficiency, maintain quality, and
                  promote successful project outcomes.
                </p>
                <br></br>
                <h2 className="title"></h2>
                <p
                  className="para"
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "1.8",
                    textAlign: "justify",
                  }}
                >
                  I have previous written CMS policies, procedures, work
                  accountability and authority matrices for global
                  organizations, managed multiple contractors' performance on
                  large scale shutdown or plant turnaround projects and educated
                  various organizations on the differences and linkages between
                  Contractor Management, Contract Management and Project
                  Controls.
                </p>
                <br></br>
                <h2 className="title"></h2>
                <p
                  className="para"
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "1.8",
                    textAlign: "justify",
                  }}
                >
                  Clarity, governance and capability in this area will drive
                  significant value for your business.
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
export default ServiceContractorAbout;
