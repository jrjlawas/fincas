import { Col, Container, Row } from "react-bootstrap";
import IMG1 from "@/assets/img/Fincas/services/expatSupport.svg";
const ServiceExpatSupportAbout = () => {
  return (
    <>
      <div className="vl-sidebar-area sp2">
        <Container>
          <Row>
            <Col lg={12} className="mx-auto">
              <div className="event-content-area">
                <h2 className="title pt-5">Expat Support Services</h2>
                <br></br>
                <p
                  className="para"
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "1.8",
                    textAlign: "justify",
                  }}
                >
                  With over 15 years working internationally, FINCAS can provide
                  a broad range of services to make your experience one you will
                  be prepared for and ensure it creates career progression and
                  lifelong memories rather than a challenging experience you'd
                  rather forget. The following critical areas can be discussed
                  and supported by FINCAS following an initial conversation on
                  your potential, existing or preferred international scenario.
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
                  1. Expat consideration depending on FIFO or full family
                  relocation
                  <br />
                  2. Role, Company and Country Risk Analysis
                  <br />
                  3. International employment contract reviews and negotiation
                  support - ensure your employment contract is not ambiguous and
                  protects you and your family
                  <br />
                  4. Guidance and Support for your partner for Family
                  Relocations and Mobilisation
                  <br />
                  5. Employment Contract Dispute Resolution support and guidance
                </ol>
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
                    Empowering professionals for successful international
                    careers.
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
export default ServiceExpatSupportAbout;
