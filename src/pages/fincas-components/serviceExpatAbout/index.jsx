import { Col, Container, Row } from "react-bootstrap";
import IMG1 from "@/assets/img/Fincas/services/aboutTargetedExpat.svg";
const ServiceExpatAbout = () => {
  return (
    <>
      <div className="vl-sidebar-area sp2">
        <Container>
          <Row>
            <Col lg={12} className="mx-auto">
              <div className="event-content-area">
                <h2 className="title pt-5">Targeted Expat Headhunter</h2>
                <br></br>
                <p
                  className="para"
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "1.8",
                    textAlign: "justify",
                  }}
                >
                  I have an extensive network of exceptional talent after
                  working in Australia, SE Asia, Mongolia, Russia, Africa and
                  Europe across all business functions at all levels. If you're
                  looking for national talent, regional expats, western expats
                  or subject matter experts in any field, please don't hesitate
                  to reach out. Cost effective and efficient way of recruiting
                  high level talent to suit your business needs.
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
                    “FINCAS connects world-class professionals with
                    international opportunities, ensuring every placement aligns
                    with both talent potential and organizational goals.”
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      ;
    </>
  );
};
export default ServiceExpatAbout;
