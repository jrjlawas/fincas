import { Col, Container, Row } from "react-bootstrap";

const ServiceOutsourceAbout = () => {
  return (
    <>
      <div className="vl-sidebar-area sp2">
        <Container>
          <Row>
            <Col lg={12} className="mx-auto">
              <div className="event-content-area">
                <h2 className="title pt-5">Outsourced Procurement Services</h2>
                <br></br>
                <p
                  className="para"
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "1.8",
                    textAlign: "justify",
                  }}
                >
                  These Procurement Services are designed to assist companies
                  with management of all or some of its procurement activities,
                  such as sourcing goods and services, project procurement,
                  critical packages or capital procurement, negotiating with
                  suppliers, managing contracts and contractors, and ensure
                  business process integrity and compliance. Businesses use
                  these services to reduce costs, gain specialized expertise,
                  maximise economies of scale, increase efficiency, ensure
                  compliance and focus on core operations by handing over tasks
                  like strategic sourcing, spend analysis, and vendor management
                  to external partner.
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
export default ServiceOutsourceAbout;
