import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col sm={12}>
                        <p className="text-center">
                            <img src={require('./images/logo.svg')} alt="Logo" className="logo" />
                        </p>
                    </Col>
                </Row>
                <Row className="display">
                    <Col sm={4}>
                        <p className="text-center">Lorem ipsum</p>
                    </Col>
                    <Col sm={4}>
                        <p className="text-center">Lorem ipsum</p>
                    </Col>
                    <Col sm={4}>
                        <p className="text-center">Lorem ipsum</p>
                    </Col>
                </Row>                
            </Container>
        </footer>
    );
  }
}

export default Footer;