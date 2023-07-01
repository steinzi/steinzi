import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card, Button} from 'react-bootstrap';

function Appearances() {

    const [appearances, setAppearances] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/appearances.json');
                setAppearances(response.data.data);
            } catch (error) {
                console.error('Error fetching appearances:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <h1 className="m-2">Appearances</h1>
            {appearances.length > 0 ? (appearances.sort((a, b) => b.id - a.id)
                .map((appearance) => (
                    <Card key={appearance.id} className="mb-3">
                        <Card.Body>
                            <Card.Title>{appearance.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{appearance.type}</Card.Subtitle>
                            <Card.Text>{appearance.description}</Card.Text>
                            <Button variant="primary" href={appearance.url} target="_blank">
                                View
                            </Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{appearance.date}</small>
                        </Card.Footer>
                    </Card>
                ))
            ) : (
                <p>Loading appearances...</p>
            )}
        </>
    );
}

export default Appearances;