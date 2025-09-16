import { useRef } from "react";
import titleIcon from "@/assets/img/icons/vl-sub-title-icon.svg";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fade: true,
    cssEase: "ease-in-out",
    touchThreshold: 100,
    arrows: false,
    dots: false,
  };
  const sliderRef = useRef(null);
  return (
    <div className="vl-banner p-relative fix">
      <Slider ref={sliderRef} {...settings} className="slider-active-1">
        <div className="vl-hero-slider vl-hero-bg slick-slide slick-current slick-active">
          <Container>
            <Row>
              <Col lg={8}>
                <div className="vl-hero-section-title">
                  <h5 className="vl-subtitle">
                    Sustainable Solutions. Proven Results.
                  </h5>
                  <h1 className="vl-title text-anime-style-3">
                    Global Procurement & Project Experts
                  </h1>
                  <p>
                    FINCAS Management Services Ltd. delivers expert Procurement,
                    Contracts, Supply Chain, and Project Services for the
                    Mining, Resources, and Energy sectors.
                  </p>
                  <div className="btn5">
                    <a href="/" className="btn-priamry1">
                      Talk to Us{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={5} />
            </Row>
          </Container>
        </div>
      </Slider>
    </div>
  );
};
export default Hero;
