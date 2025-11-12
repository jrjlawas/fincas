import { Col, Container, Row } from "react-bootstrap";
import IMG1 from "@/assets/img/Fincas/services/aboutPlayer.svg";
import IMG2 from "@/assets/img/Fincas/services/aboutPlayer2.svg";
const ServicePlayerAbout = () => {
  return (
    <>
      <div className="vl-sidebar-area sp2">
        <Container>
          <Row>
            <Col lg={12} className="mx-auto">
              <div className="event-content-area">
                <h2 className="title pt-5">Player and Sports Management</h2>
                <br></br>
                <p
                  className="para"
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "1.8",
                    textAlign: "justify",
                  }}
                >
                  FINCAS offers a tailored and personalized exclusive management
                  service linking you with Tier 1 clients both in Australia and
                  Internationally. Our success is driven by existing global
                  partners and relationships which incorporate every aspect of
                  our client's lifestyle. We have a broad network of talent
                  scouts across a diverse range of sports and are committed to
                  doing whatever it takes to secure you the very best partners
                  to ensure you reach your full potential and ultimate success.
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
                    “From passion to performance, FINCAS builds the bridge
                    between talent and triumph.”
                  </p>
                </div>
                <br></br>
                <div style={{ textAlign: "center", marginTop: "3rem" }}>
                  <img
                    src={IMG2}
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
                    “More than management—FINCAS builds lasting careers through
                    strategy, mentorship, and global partnerships in sports.”
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
export default ServicePlayerAbout;
