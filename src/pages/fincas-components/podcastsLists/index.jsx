import errorBg from "@/assets/img/breadcrumb/vl-error-bg.png";
import shapeImg1 from "@/assets/img/breadcrumb/breadcrumb-shape-1.1.png";
import shapeImg2 from "@/assets/img/breadcrumb/breadcrumb-shape-1.2.png";
import shapeImg3 from "@/assets/img/breadcrumb/breadcrumb-shape-1.3.png";
import { FaAngleRight, FaArrowRight } from "react-icons/fa6";
import thumbImg from "@/assets/img/error/vl-error-thmb.png";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
const PodcastsLists = () => {
  return (
    <>
      <section className="vl-error-section sp1">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <div className="error-content text-center">
                {/* <div className="thumb">
                  <img
                    className="w-100 img-fluid"
                    src={thumbImg}
                    alt="thumbImg"
                  />
                </div> */}
                <div className="content">
                  <h4 className="title">
                    {" "}
                    Fincas Insights Podcast — Coming Soon
                  </h4>
                  <p className="para">
                    We’re excited to announce the upcoming launch of the Fincas
                    Insights Podcast, where industry experts and business
                    leaders share practical strategies, success stories, and
                    innovations shaping the future of procurement, business
                    strategy, and organizational excellence.
                  </p>
                  <div className="btn-area">
                    <div className="btn5">
                      <Link to="/" className="btn-priamry1">
                        Back to Home{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default PodcastsLists;
