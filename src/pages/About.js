import React from 'react';
import {Badge, Button, Card, Image} from "react-bootstrap";
import  Linkedin from '../components/icons/linkedin-svgrepo-com.svg';
import Twitter from '../components/icons/twitter-svgrepo-com.svg';
import Cv from '../components/icons/cv-file-interface-symbol-svgrepo-com.svg';
import Github from '../components/icons/github-svgrepo-com.svg';
function About() {
    return (
        <>
            <div className="text-center m-4">
                <Image className="d-block mx-auto mb-4" width="200" src="/steinn.jpeg" roundedCircle />
                <h1 className="display-5 fw-bold text-body-emphasis">About me <Badge pill bg="danger">ChatGPT</Badge></h1>
                <Card.Body className="m-4">
                    {/*<Card.Img variant="top" src="/steinn.jpeg"  width="140" />*/}
                    <Card.Title className="fw-bold text-body-emphasis"></Card.Title>
                    <Card.Text className="lead mb-4">
                        Hello, world! Meet your friendly neighborhood Viking techie, Steinn Örvar Bjarnarson. But let's make life easier, call me Steinzi - it has a nicer ring to it, don't you think? I'm the proud owner of CCIE #60715, your go-to guru for all things network engineering and automation, served up with a dollop of wit, a pinch of humor, and a heavy dose of Icelandic "charm".
                        Why, yes, I do have a B.Sc. degree in Computer Science, fresh from the academic ovens of the University of Reykjavik, class of 2023. But don't let the degree fool you – I'm a lifelong learner. Certifications are my Pokémon – I've got to catch them all!

                        Catch me in the wild at conferences or meetups, where I revel in dispelling the smoke and mirrors surrounding automation, networking, and security. Remember, I'm not here to package and sell you a personal brand or a glossy brochure of tech enlightenment. I'm right here in the trenches with you, tangled in the webs of network automation development.

                        When the keyboard quiets down, I transition into my roles as an eager-beaver dad and a perpetual certification chaser. As for this site, don't expect a sparkling, sales-y personal branding exercise. Instead, it's the raw, uncensored ramblings of a tech enthusiast swimming (sometimes floundering) in the boundless digital sea. No frills, no sugar-coating, just the unfiltered Steinzi experience.
                    </Card.Text>
                    <Card.Text>
                        Wow that is so terrible LLM sludge, I'm sorry. I'll try to make it better later...
                    </Card.Text>
                    <Card.Subtitle>
                        Here are some links to more stuff about me...
                    </Card.Subtitle>
                    <Button variant="secondary" href='https://www.linkedin.com/in/steinn-örvar-a3436613b/' ><Image src={Linkedin}/></Button>
                    <Button variant="secondary" href='https://twitter.com/0x535431' className="m-1"><Image src={Twitter}/></Button>
                    <Button variant="secondary" href='https://github.com/steinzi' className="m-1"><Image src={Github}/></Button>
                    <Button variant="secondary" href='https://docs.google.com/document/d/e/2PACX-1vTXTHtrLosl2crQKu_O9DDMxuTyJ7sL4l3g37R781JXPgxZzAh_idvZW4FBAFrRoO2PByJJl9q46F7E/pub'><Image src={Cv}/></Button>
                </Card.Body>
            </div>
        </>
    );
}

export default About;