import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {

    return (
        <footer className="bg-dark text-light">
            <Container>
                <Row>
                    <Col s={12} md={6} >
                        <p>This is a prototype implemented as a practical part of my bachelor's thesis, Prototyping Touchless User Interface for Interacting with a Website.</p>
                        <p>A git repository of the demo can be found <a href="https://github.com/dalgrang/touchless-ui-for-a-website" target="_blank" rel="noopener noreferrer">here</a>.</p>
                    </Col>
                    <Col>
                        <p>This prototype is built by using following libraries: </p>
                        <li><a href="https://github.com/justadudewhohacks/face-api.js/" target="_blank" rel="noopener noreferrer">face-api.js</a></li>
                        <li><a href="https://github.com/facebook/react/" target="_blank" rel="noopener noreferrer">React</a></li>
                        <li><a href="https://github.com/react-bootstrap/react-bootstrap" target="_blank" rel="noopener noreferrer">React Bootstrap</a></li>
                    </Col>
                </Row>
            </Container>
        </footer>
    )

}

export default Footer;