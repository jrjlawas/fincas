import qutImg from "@/assets/img/icons/vl-qut-1.1.svg";
import { FaStar } from "react-icons/fa6";
import arrowLeft from "@/assets/img/icons/vl-arrow-left-1.1.svg";
import angleRight from "@/assets/img/icons/vl-angle-right-1.2.svg";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row } from "react-bootstrap";

import t1 from "@/assets/img/Fincas/testi/t1.svg";
import t2 from "@/assets/img/Fincas/testi/t2.svg";
import t3 from "@/assets/img/Fincas/testi/t3.svg";
import t4 from "@/assets/img/Fincas/testi/t4.svg";
import t5 from "@/assets/img/Fincas/testi/t5.svg";
import t6 from "@/assets/img/Fincas/testi/t6.svg";
import t7 from "@/assets/img/Fincas/testi/t7.svg";
import React, { useState, useEffect } from "react";

const TestimonialItem = ({ item, index, expandedIndex, setExpandedIndex }) => {
  const isExpanded = expandedIndex === index;

  return (
    <div className="vl-testimonial-box-content">
      <p style={{ lineHeight: "1.8" }}>
        {isExpanded || item.quote.length <= 150
          ? item.quote
          : `${item.quote.substring(0, 150)}...`}
        {item.quote.length > 150 && (
          <span
            style={{
              color: "#fcba03",
              cursor: "pointer",
              marginLeft: "5px",
              fontWeight: "500",
            }}
            onClick={() => setExpandedIndex(isExpanded ? null : index)}
          >
            {isExpanded ? "See less" : "See more"}
          </span>
        )}
      </p>
    </div>
  );
};

const Testimonial = () => {
  const testimonialData = [
    {
      name: "Hery-Tiana Razafimahaleo",
      role: "Co-Founder & General Manager | Namana Craft Beer",
      image: t1,
      quote:
        "It was an honor and a pleasure to work with Steven. Steven is a truly high caliber supply chain and strategic sourcing professional, an energetic leader and impact player who gets things done, sets organizations in motion and inspires people to continuously level up and enjoy at work. He has been a major architect of the regeneration of the supply chain department of Ambatovy (Madagascar) and brought focus, positive changes, greater workplace safety awareness, significant operational efficiency gains, cost reductions, all of that along with a renewed sense of pride to the local workforce. Finally on a personal note, working under the leadership of Steven helped me raise my game. I enjoyed the journey and learned a lot, for that I am grateful to him.",
      rating: 5,
    },
    {
      name: "Wim Hoogedeure",
      role: "Global Vice President | DP World",
      image: t2,
      quote:
        "Steven is the consummate Supply Chain professional. I've previously worked with Steven in Australia, PNG and most recently Madagascar, on Global Contractor Management solutions and Strategic Sourcing transformation projects. It is always a real pleasure working with Steven, he’s collaborative, brings a deep knowledge of and experience in Supply Chain (Strategy, Operational Execution, related Commercial Functions). I look forward to continuing working together.",
      rating: 5,
    },
    {
      name: "Dimitry De Ridder",
      role: "Head of Commercial Strategy & Analytics | Newmont Corp.",
      image: t3,
      quote:
        "Steven is a highly experienced and skilled individual with proven track record. His strong leadership skills along with extensive experience in developing and successfully implementing strategy, have seen him transform strategic procurement and supply chain functions in multiple organisations. Having had the opportunity to work with him on multiple occasions, I highly recommend Steven.",
      rating: 5,
    },
    {
      name: "Ron Brown",
      role: "Supply Chain Executive | RB Advisory Services",
      image: t4,
      quote:
        "Steve is very professional and experienced person across all areas of Supply Chain Management. He is outcome driven with a focus on driving value through all elements of procurement from Category Strategy to execution of contracts. More recently he has developed extensive global experience in operational supply chain management covering inventory , logistics and warehouse operations in complex regions with great success. I can highly recommend Steven to be able to lead and drive value within the supply chain. I highly recommend Steven ",
      rating: 5,
    },
    {
      name: "John Carlo Del Piccolo",
      role: "Retired Supply Chain Executive | Sherritt International Corp.",
      image: t5,
      quote:
        "Progressive and innovative leader in all aspects of international Supply Chain management and Strategic Sourcing in large scale mining and mineral processing industries. He is focused, trustworthy, results oriented and driven for high levels of performance and success for himself and his employer and inspired and motivated his employees for similar high levels of performance. He led a successful reorganization of the procurement function at Ambatovy to focus on strategic sourcing and category management and served as a great mentor and coach for the national and expat employees.",
      rating: 5,
    },
    {
      name: "Wijaya Kendri, MBA",
      role: "Procurement Manager | NEUMAN & ESSER Group",
      image: t6,
      quote:
        "I can boldly say that I have had the highest privilege so far during my professional career to work for Steven in Phu Bia Mining (Panaust) Supply Group where he was the Group Supply Manager. He has a very sharp and crystal-clear perspective in terms of what to be addressed, how and what to be achieved in all aspects of his leadership. Not only that, he was able to communicate this perspective in a way that everyone in the team would have a full understanding and also the required confidence in working towards achieving the goal. I have also seen him being innovative in his approach when formulating strategy and resolving issues. " +
        "He would be an exceptionally great asset for any company seeking a leader in improving profitability (or bottom line as people say) through an essential transformation in supply chain management activities (strategic sourcing, category management, commercial and contract management, SRM, negotiation, logistics, value chain management, etc.) and then implementing tailor-made programs to enable the organization to stay aggressively competitive in the market. " +
        "He has been a great manager, mentor, and friend to me at the same time even into these days when we do not currently work together. I have developed so much in my professional life having worked with him and have come to really appreciate all the advice and mentorship during our time working together. ",
      rating: 5,
    },
    {
      name: "Anthony Todd",
      role: "General Director | KAZ Minerals",
      image: t7,
      quote:
        "I have the pleasure of working with Steven during his current time at Ambatovy whereby our team were running the PAL operations and were always in need to expedite parts to keep the operations reliable coming out of ramp up to operational phase. " +
        "During our interactions, it was very clear Steven had a wealth of knowledge from his Commercial and logistics background, and always carefully considered the information myself and the maintenance team were providing to him. " +
        "Steven fully understands the synergies and complexities of short term project based work versus long term operational based assignments, and he used them both to extract maximum value in his management role. " +
        "Steven is a hard working, diligent and extremely professional in his approach to his customers.",
      rating: 5,
    },
  ];
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize(); // Run initially
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="vl-testimonial vl-testimonial-bg sp1">
      <Container>
        <div className="vl-section-title-1 white mb-60 text-center">
          <h5
            className="subtitle"
            data-aos="fade-up"
            data-aos-duration={800}
            data-aos-delay={300}
          >
            Testimonial
          </h5>
          <h2 className="title text-anime-style-3">
            Client Experiences That Speak for Themselves
          </h2>
          <p data-aos="fade-up" data-aos-duration={800} data-aos-delay={300}>
            Real stories of success from organizations we’ve partnered with in
            achieving operational excellence and strategic growth.
          </p>
        </div>
        <Row>
          <div className="vl-testimonial-arow p-relative">
            <Swiper
              modules={[Autoplay, Navigation]}
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: true,
              // }}
              slidesPerView={3}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              loop
              spaceBetween={30}
            >
              <div id="testimoni1" className="owl-carousel owl-theme">
                {testimonialData?.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="vl-testimonial-box p-relative">
                      <div className="vl-testimonial-box-icon">
                        <span>
                          <FaStar className="fa-solid fa-star" />
                        </span>
                        <span>
                          <FaStar className="fa-solid fa-star" />
                        </span>
                        <span>
                          <FaStar className="fa-solid fa-star" />
                        </span>
                        <span>
                          <FaStar className="fa-solid fa-star" />
                        </span>
                        <span>
                          <FaStar className="fa-solid fa-star" />
                        </span>
                      </div>

                      <TestimonialItem
                        key={idx}
                        item={item}
                        index={idx}
                        expandedIndex={expandedIndex}
                        setExpandedIndex={setExpandedIndex}
                      />

                      <div className="vl-testimonial-box-auth">
                        <div className="vl-auth-desc">
                          <div className="auth-img">
                            <img src={item.image} alt="testimonial-img" />
                          </div>
                          <div className="auth-title">
                            <h4 className="title">
                              <a href="#">{item.name}</a>
                            </h4>
                            <span>{item.role}</span>
                          </div>
                        </div>
                        <div className="vl-auth-quote">
                          <span>
                            <img src={qutImg} alt="qutImg" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
            {!isMobile && (
              <div className="owl-nav">
                <button className="owl-prev swiper-button-prev">
                  <img src={arrowLeft} alt="arrowLeft" />
                </button>

                <button className="owl-next swiper-button-next">
                  <img src={angleRight} alt="angleRight" />
                </button>
              </div>
            )}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
