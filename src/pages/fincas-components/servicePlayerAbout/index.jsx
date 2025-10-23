import { Col, Container, Row } from "react-bootstrap";

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
