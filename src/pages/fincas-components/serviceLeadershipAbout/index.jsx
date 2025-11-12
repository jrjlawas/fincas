import { Col, Container, Row } from "react-bootstrap";
import IMG1 from "@/assets/img/Fincas/services/aboutLeadership.svg";
const ServiceLeadershipAbout = () => {
  return (
    <>
      <div className="vl-sidebar-area sp2">
        <Container>
          <Row>
            <Col lg={12} className="mx-auto">
              <div className="event-content-area">
                <h2 className="title pt-5">Interim Leadership Services</h2>
                <br></br>
                <p
                  className="para"
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "1.8",
                    textAlign: "justify",
                  }}
                >
                  Quality leadership can make or break a business. Your leaders
                  don't only impact the bottom line but also ensure everything
                  is run sustainably, allow you time to appoint the right person
                  longer term, implement critical business decisions or changes,
                  and ensure your business continues to deliver the business
                  goals during times of significant change.
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
                    “FINCAS delivers expert interim leadership to guide
                    transformation, strengthen operations, and sustain
                    organizational momentum.”
                  </p>
                </div>
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
                  As an Interim leader, I have 20+ years' experience in senior
                  roles with Global Tier 1 multinational companies to support
                  you during difficult transitional periods. I will take on a
                  leadership role in an organization for a limited time,
                  temporarily and/or typically fill the position for a period of
                  three months to two years, with flexibility in between
                  depending on what the company needs.
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
export default ServiceLeadershipAbout;
