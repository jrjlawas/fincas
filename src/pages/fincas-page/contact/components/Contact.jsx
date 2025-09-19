import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ visible: false, message: "", type: "" });
  const showAlert = (message, type = "success") => {
    setAlert({ visible: true, message, type });
  };
  const serviceID = "service_ycz3is5";
  const templateID = "template_049l0ee";
  const publicKey = "INsPxLOLuKJjm5fTg";

  const now = new Date();
  const dateTime = now.toLocaleString();

  const [formData, setFormData] = useState({
    FIRSTNAME: "",
    LASTNAME: "",
    EMAILADDRESS: "",
    MESSAGE: "",
  });

  const templateParams = {
    name: formData.FIRSTNAME + ", " + formData.LASTNAME,
    client_email: "info@fincasmanagement.com",
    glotti_email: "ironpeaktechnologies@gmail.com",
    client_name: "FINCAS Services Management Ltd",
    sender_name: "FINCAS Mailer",
    title: "Website Visitor Inquiry",
    time: dateTime,
    message: `
    First Name: ${formData.FIRSTNAME}
    Last Name: ${formData.LASTNAME}
    Email Address: ${formData.EMAILADDRESS}
    Message/Inquiry: ${formData.MESSAGE}
  `,
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (
        !formData.FIRSTNAME ||
        !formData.LASTNAME ||
        !formData.EMAILADDRESS ||
        !formData.MESSAGE
      ) {
        showAlert("Please fill out all fields before sending.", "error");
        setLoading(false);
        return;
      }

      emailjs.send(serviceID, templateID, templateParams, publicKey).then(
        (response) => {
          setFormData({
            FIRSTNAME: "",
            LASTNAME: "",
            EMAILADDRESS: "",
            MESSAGE: "",
          });
          showAlert(
            "Thank you for reaching out to FINCAS Services Management Ltd! We’ve received your inquiry and will get in touch soon to confirm.",
            "success"
          );
          setLoading(false);
        },
        (error) => {
          showAlert(
            "API Gateway error. Please contact IronPeak Technologies at ironpeaktechnologies@gmail.com",
            "error"
          );
          setLoading(false);
        }
      );
    } catch (error) {
      showAlert(
        "API Gateway error. Please contact Glotti Business Solutions at ironpeaktechnologies@gmail.com",
        "error"
      );
      setLoading(false);
    }
  };

  return (
    <section className="vl-contact-section-inner sp2">
      <Container>
        <Row className=" flex-lg-row flex-column-reverse">
          <Col lg={6} className="mb-30">
            <div className="vl-maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13144.459118636094!2d-113.95801057573186!3d51.06571323917659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717b349bf4e189%3A0x21bf5a0a84399556!2sMarbank%20Dr%20NE%2C%20Calgary%2C%20AB%2C%20Canada!5e1!3m2!1sen!2sph!4v1756648491880!5m2!1sen!2sph"
                allowFullScreen
                className="vl-contact-maps"
              />
            </div>
          </Col>
          <Col lg={6} className="mb-30">
            <div className="vl-section-content ml-50">
              <div className="section-title">
                <h4 className="subtitle">Talk to Us</h4>
                <h2 className="title">
                  Let’s Build Better Procurement & Supply Chain Solutions
                  Together
                </h2>
                <p className="para pb-32">
                  Our experienced team is ready to tackle challenges, unlock
                  opportunities, and deliver lasting value. Whether you need
                  strategic advice, hands-on support, or a trusted partner,
                  FINCAS Management Services Ltd is here to help—reach out today
                  to see how we can make a difference.
                </p>
              </div>
              <div className="vl-form-inner">
                <form action="#">
                  <Row>
                    <Col lg={6}>
                      <input
                        type="text"
                        name="FIRSTNAME"
                        onChange={handleChange}
                        value={formData.FIRSTNAME}
                        placeholder="First Name*"
                      />
                    </Col>
                    <Col lg={6}>
                      <input
                        type="text"
                        name="LASTNAME"
                        onChange={handleChange}
                        value={formData.LASTNAME}
                        placeholder="Last Name*"
                      />
                    </Col>
                    <Col lg={12}>
                      <input
                        type="text"
                        name="EMAILADDRESS"
                        onChange={handleChange}
                        value={formData.EMAILADDRESS}
                        placeholder="Email Address*"
                      />
                    </Col>

                    <Col lg={12}>
                      <textarea
                        name="MESSAGE"
                        id="message"
                        onChange={handleChange}
                        value={formData.MESSAGE}
                        placeholder="How can we help you?*"
                        defaultValue={""}
                      />
                    </Col>
                    <Col lg={12}>
                      {alert.visible && (
                        <div className={`alert-box ${alert.type}`}>
                          {alert.message}
                        </div>
                      )}

                      <br />
                    </Col>
                    <Col lg={12}>
                      <div className="btn-area4">
                        <button
                          type="button"
                          className="header-btn1 testimonial-btn4 testibtn4"
                          onClick={handleSubmit}
                        >
                          {loading ? (
                            <>
                              Submitting..
                              <span className="spinner"></span>
                            </>
                          ) : (
                            <>
                              SEND NOW{" "}
                              <span>
                                <FaArrowRight />
                              </span>
                            </>
                          )}
                        </button>
                      </div>
                    </Col>
                    {/* <Col lg={12}>
                      <div className="btn-area">
                        <button className="header-btn1">
                          Send Now{" "}
                          <span>
                            <FaArrowRight />
                          </span>
                        </button>
                      </div>
                    </Col> */}
                  </Row>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Contact;
