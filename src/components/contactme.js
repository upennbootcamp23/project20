import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from '../components/contact-form';
import { FaGithub, FaPreply, FaEnvelope } from "react-icons/fa";
import '../App.css';

function ContactMe() {
  return (
    <div className='container'>
        <Jumbotron fluid className="p-5 mb-0">
            <Container className="text-center">
                <div className="p-md-5">
                    <h1>Contact Me!</h1>
                </div>
            </Container>
        </Jumbotron>

        <Container fluid className="shadow bg-light mb-5">
            <Container className="p-4">
                <Row>
                    <Col>
                        <Container>
                            <h4 style={{color: "#1A8549"}}>Contacting Information:</h4>
                            <p>
                                <a href="mailto:alexandersegerev@gmail.com">
                                    <span className="pr-3">
                                        <FaEnvelope />
                                    </span>
                                    alexandersegerev@gmail.com
                                </a>
                            </p>
                            
                            <p>
                                <a href="https://github.com/upennbootcamp23" target='_blank'>
                                    <span className="pr-3">
                                        <FaGithub />
                                    </span>
                                    upennbootcamp23
                                </a>
                            </p>
                            <p>
                                <a href="https://preply.com/en/tutor/4048617" target='_blank'>
                                    <span className="pr-3">
                                        <FaPreply />
                                    </span>
                                </a>
                            </p>
                        </Container>
                    </Col>

                    <Col sm={12} md={6} lg={8} className="pt-sm-4 pt-lg-0">
                        <Container>
                            <h4 style={{color: "#E5296B"}}>Send Me a Message</h4>
                            <ContactForm />
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>
    </div>
  )
}

export default ContactMe;