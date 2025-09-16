import ctaImg1 from "@/assets/img/Fincas/home/Cta1.svg";
import { Col, Container, Row } from "react-bootstrap";
const CtaArea = () => {
  return (
    <section id="contact" className="vl-cta">
      <Container>
        <div
          className="vl-cta-bg"
          style={{
            backgroundImage: `url(${ctaImg1})`,
          }}
        >
          <Row>
            <Col lg={12}>
              <div className="vl-cta-content text-center">
                <h2 className="title">Ready to Transform Your Operations?</h2>
                <p>
                  Our team of senior professionals is ready to help you
                  streamline operations, reduce costs, and drive sustainable
                  value.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
export default CtaArea;
