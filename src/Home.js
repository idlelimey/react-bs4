import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Wrapper from './Wrapper';
import HomeBg from './images/home.jpg';

const styles = {
    custom: {
        backgroundImage : `url(${HomeBg})`,
        backgroundSize  : 'cover',
        height          : '100vh'
    }
};

export default class Home extends Component {
    render() {
        return (
            <Wrapper>
                <Container style={styles.custom}>
                    <Row className='align-items-center h-100'>
                        <Col>
                           
                            <p className="text-center lead">Hello.</p>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        );
    }
}