import { Col, Container, Row } from "react-bootstrap";

const ServiceOrganizationAbout = () => {
  return (
    <>
      <div className="vl-sidebar-area sp2">
        <Container>
          <Row>
            <Col lg={12} className="mx-auto">
              <div className="event-content-area">
                <h2 className="title pt-5">
                  Organizational Design Development
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
                  Organizational design is the process of aligning the structure
                  of an organisation with its strategic goals and objectives,
                  with the ultimate aim of improving efficiency and
                  effectiveness. Work can be triggered by the need to improve
                  service delivery or specific business processes, or as a
                  result of a new mandate. Designs can differ from flat, center
                  led, hub and spoke, centralized, decentralized, enterprise,
                  matrix, divisional, and other varieties to support your
                  specific business needs.
                  <br />
                  The following considerations are critical:
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
                ></p>
                <ol
                  style={{
                    fontSize: "1.4rem",
                    lineHeight: "1.8",
                    paddingLeft: "1.5rem",
                  }}
                >
                  1. Understanding the imperative for change and the environment{" "}
                  <br />
                  2. Understanding the business processes, workflows, roles and
                  responsibilities, volumes of work, activity analysis and
                  resources
                  <br />
                  3. Understand the geography and cultures
                  <br />
                  4. Designing and testing new models or structures
                  <br />
                  5. Planning and managing the transition from the old structure
                  to the new
                  <br />
                  6. Implementing and monitoring the change
                  <br />
                  7. Talent Identification and career path assumptions
                </ol>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      ;
    </>
  );
};
export default ServiceOrganizationAbout;
