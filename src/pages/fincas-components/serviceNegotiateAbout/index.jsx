import { Col, Container, Row } from "react-bootstrap";
import IMG1 from "@/assets/img/Fincas/services/aboutNego.svg";
const ServiceNegotiateAbout = () => {
  return (
    <>
      <div className="vl-sidebar-area sp2">
        <Container>
          <Row>
            <Col lg={12} className="mx-auto">
              <div className="event-content-area">
                <h2 className="title pt-5">
                  Negotiation Strategy and Training
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
                  Targeted negotiations or full departmental sourcing
                  negotiation strategy development and training. I will focus on
                  preparation, understanding the other party's motivations and
                  hidden agendas, understanding and building the negotiation
                  climate, communication tools and tactics to deliver value add
                  outcomes for both your business and your key partners or
                  suppliers. The development of tools, processes, templates,
                  tactics, training, experiential opportunities, evaluation
                  models, scenarios (MDO, LAA and WA) whilst ensuring integrity,
                  ethics and sustainability are understood and complied with.
                </p>
                <br></br>
                <h2 className="title"></h2>

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
                <p
                  className="para"
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "1.8",
                    textAlign: "justify",
                  }}
                >
                  Training can be provided for individuals, team, diverse
                  groups, full department or Executive Level stakeholders across
                  any spend profile, critical business need crisis you may have.
                  Training Packs are developed and provided depending on your
                  need from beginner to Expert level.
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
export default ServiceNegotiateAbout;
