import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Button } from "react-bootstrap";
import SendEmail from '../assets/sendEmail.png';
import { FiSend } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_APP_EMAILJS_USER_ID,
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="contact" id="contact">
      <Container className="border rounded ">
      <h2 className="fs-1 text-center mt-3">Contact</h2>
        <Row className="d-flex justify-content-center align-items-center my-3 g-0">
          <Col md={6} className=" mb-3 d-flex justify-content-center align-items-center">
            <img src={SendEmail} alt="Me contacter" className="w-50 rounded SendEmail"/>
          </Col>
          <Col md={6} className="mx-auto my-auto text-center">
            <div>
              
              <Link
                to="mailto:rios.marilyne@gmail.com"
                className="text-white text-decoration-none"
              >
                <MdMailOutline size={25}/> <span className="fs-5">rios.marilyne@gmail.com</span>
              </Link>
              <form ref={form} onSubmit={sendEmail}>
                <Row>
                  <Col md={12} className="px-1 mt-4 d-flex flex-column align-items-center">
                    <label>Prénom et Nom :</label>
                    <input type="text" 
                      name="user_name"  
                      placeholder="Martin Dupond"
                      className="px-2 w-75 rounded my-1"/>
                  </Col>

                  <Col md={12} className="px-1 d-flex flex-column align-items-center">
                    <label>Email :</label>
                    <input type="email" 
                      name="user_email"
                      placeholder="email@gmail.com"
                      className="px-2 w-75 rounded my-1"/>
                  </Col>

                  <Col md={12} className="px-1 d-flex flex-column align-items-center">
                    <label>Ecrivez votre message :</label>
                    <textarea 
                      rows={5} 
                      name="message" 
                      placeholder="message" 
                      className="px-2 w-75 rounded my-1"/>
                    <Button type="submit" value="Send" className="my-3 w-50"><span>Envoyer {" "} <FiSend /></span></Button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
