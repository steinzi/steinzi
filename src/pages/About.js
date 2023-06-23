import React from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";

function About() {
    return (
        <>
            <Row>
                <Col >
                    <Image width="140" src="/steinn.jpeg" roundedCircle />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            {/*<Card.Img variant="top" src="/steinn.jpeg"  width="140" />*/}
                            <Card.Title>About Me</Card.Title>
                            <Card.Text>
                                My name is Steinn Örvar Bjarnarson, but everyone calls me Steinzi.
                            </Card.Text>
                            <Card.Subtitle>
                                I graduated from the University of Reykjavik in 2023 with a B.Sc. degree in Computer Science.
                            </Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default About;