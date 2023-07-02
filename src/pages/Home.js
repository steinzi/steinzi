import React from 'react';
import {Card, Image} from "react-bootstrap";

function Home() {
    return (
        <div className="text-center m-4">
            <Image className="d-block mx-auto mb-4" width="200" src="/steinn.jpeg" roundedCircle />
            <h1 className="display-5 fw-bold text-body-emphasis">Hi, I'm Steinzi</h1>
            <Card.Body className="m-4">
                {/*<Card.Img variant="top" src="/steinn.jpeg"  width="140" />*/}
                <Card.Title className="fw-bold text-body-emphasis"></Card.Title>
                <Card.Text className="lead mb-4">
                    Welcome to my "website". My name is Steinn Örvar Bjarnarson, but call me Steinzi.
                </Card.Text>
                <Card.Subtitle>
                    This is not a blog, personal brand sales site, or a portfolio. It's just a place for me to put my
                    stuff.
                </Card.Subtitle>
            </Card.Body>
        </div>
    );
}

export default Home;