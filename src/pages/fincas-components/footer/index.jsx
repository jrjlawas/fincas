import footerLogo from "@/assets/img/Fincas/footer/logoBlack.svg";
import footerIc1 from "@/assets/img/icons/vl-footer-ic-1.1.svg";
import footerIc2 from "@/assets/img/icons/vl-footer-ic-1.2.svg";
import footerIc3 from "@/assets/img/icons/vl-footer-2.1.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <footer className="vl-footer-bg-1">
      <Container>
        <Row>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-1 mb-30">
              <div className="vl-footer-logo">
                <Link to="/">
                  <img src={footerLogo} alt="footerLogo" />
                </Link>
              </div>
              <div className="vl-footer-content">
                <p>
                  Since 2020, FINCAS has provided Procurement, Supply Chain, and
                  Project Services to Mining, Resources, and Energy industries,
                  powered by leaders with 10+ years’ experience.
                </p>
              </div>
              <div className="vl-footer-social-1">
                <ul>
                  <li>
                    <a
                      className="d-flex align-items-center justify-content-center"
                      href="https://www.linkedin.com/company/fincas-business-services-ltd/"
                      target="_"
                    >
                      <FaLinkedinIn className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-2 pl-90 mb-30">
              <h3 className="title">Quick Links</h3>
              <div className="vl-footer-menu">
                <ul>
                  <li>
                    <Link to="/">Talk to Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-2 pl-30 mb-30">
              <h3 className="title">Our services</h3>
              <div className="vl-footer-menu">
                <ul>
                  <li>
                    <a href="#">Strategy & Optimization</a>
                  </li>
                  <li>
                    <a href="#">Procurement Excellence</a>
                  </li>
                  <li>
                    <Link to="#">Contractor & Asset Solutions</Link>
                  </li>
                  <li>
                    <a href="#">Leadership & Training</a>
                  </li>
                  <li>
                    <a href="#">Organizational Design</a>
                  </li>
                  <li>
                    <a href="#">Outsourced Services</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-3 mb-30">
              <h3 className="title">Contact Us</h3>
              <div className="vl-footer-icon-list">
                <div className="vl-footer-icon">
                  <span>
                    <img src={footerIc1} alt="footerIc1" />
                  </span>
                </div>
                <div className="vl-footer-text">
                  <a href="mailto:support@charity.com">
                    stevenc05185@gmail.com
                  </a>
                </div>
              </div>
              <div className="vl-footer-icon-list">
                <div className="vl-footer-icon">
                  <span>
                    <img src={footerIc2} alt="footerIc2" />
                  </span>
                </div>
                <div className="vl-footer-text">
                  <a href="#">Isabel, Leyte Philippines</a>
                </div>
              </div>
              <div className="vl-footer-icon-list">
                <div className="vl-footer-icon">
                  <span>
                    <img src={footerIc3} alt="footerIc3" />
                  </span>
                </div>
                <div className="vl-footer-text">
                  <a href="tel:+263787024225">+263787024225</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="vl-copyright copyright-border-1">
          <Row>
            <Col md={6}>
              <p className="vl-copyright-text">
                © 2025 IronPeak Technologies. All Rights Reserved.
              </p>
            </Col>
            <Col md={6}>
              <div className="vl-copyright-menu">
                <ul>
                  <li>
                    <a href="#">Privacy Policy </a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
