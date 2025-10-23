import Blog1 from "@/assets/img/blog/vl-blg-1.1.png";
import Blog2 from "@/assets/img/blog/vl-blg-1.2.png";
import Blog3 from "@/assets/img/blog/vl-blg-1.3.png";
import calender1 from "@/assets/img/icons/vl-calender-1.1.svg";
import user1 from "@/assets/img/icons/vl-user-1.1.svg";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import { articleData } from "./data";

const CertificateLists = () => {
  return (
    <section id="blog" className="vl-blg sp2">
      <Container>
        <Row>
          {articleData?.map((item, idx) => (
            <Col lg={4} md={6}>
              <div
                className="vl-single-blg-item mb-30"
                data-aos="fade-right"
                data-aos-duration={1200}
                data-aos-delay={300}
              >
                <div className="vl-blg-thumb">
                  <Link to={item.link} target="_">
                    <img className="w-100" src={item.icon} alt="Blog1" />
                  </Link>
                </div>
                <div className="vl-meta">
                  <ul>
                    <li>
                      <a href={item.link} target="_">
                        <span className="top-minus">
                          {" "}
                          <img src={calender1} alt="calender1" />
                        </span>{" "}
                        {item.date}
                      </a>
                    </li>
                    <li>
                      <a href={item.link} target="_">
                        <span className="top-minus">
                          {" "}
                          <img src={user1} alt="user1" />
                        </span>{" "}
                        {item.authour}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="vl-blg-content">
                  <h3 className="title">
                    <Link to={item.link} target="_">
                      {item.title}
                    </Link>
                  </h3>
                  {/* <p>{item.description}</p>
                  <Link to={item.link} target="_" className="read-more">
                    View{" "}
                    <span>
                      <FaArrowRight />
                    </span>
                  </Link> */}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default CertificateLists;
