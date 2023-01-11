import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  // const formInitialDetails = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // };
  // const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  // const [status, setStatus] = useState({});

  // const onFormUpdate = (category, value) => {
  //   setFormDetails({
  //     ...formDetails,
  //     [category]: value,
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sent");
    setTimeout(() => {
      setButtonText("Send");
    }, 3000);
    //   let response = await fetch("http://localhost:5000/contact", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json;charset=utf-8",
    //     },
    //     body: JSON.stringify(formDetails),
    //   });
    setButtonText("Send");
    //   let result = await response.json();
    //   setFormDetails(formInitialDetails);
    //   if (result.code == 200) {
    //     setStatus({ succes: true, message: "Message sent successfully" });
    //   } else {
    //     setStatus({
    //       succes: false,
    //       message: "Something went wrong, please try again later.",
    //     });
  };
  // };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" placeholder="First Name" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6"></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};