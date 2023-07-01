import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card, Button} from 'react-bootstrap';

function Publications() {

    const [publications, setPublications] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/publications.json');
                setPublications(response.data.data);
            } catch (error) {
                console.error('Error fetching publications:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <h1 className="m-2">Publications</h1>
            {publications.length > 0 ? (
                publications.sort((a, b) => b.id - a.id).map((publication) => (
                    <Card key={publication.id} className="mb-3">
                        <Card.Body>
                            <Card.Title>{publication.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{publication.type}</Card.Subtitle>
                            <Card.Text>{publication.description}</Card.Text>
                            <Button variant="primary" href={publication.url} target="_blank">
                                View
                            </Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{publication.date}</small>
                        </Card.Footer>
                    </Card>
                ))
            ) : (
                <p>Loading publications...</p>
            )}
        </>
    );
}

export default Publications;