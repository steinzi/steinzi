import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card, Button, Container, Badge} from 'react-bootstrap';

function Publications() {
    // Sample publication data

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
        <div>
            <h2>Publications</h2>
            {publications.length > 0 ? (
                publications.map((publication) => (
                    <Card key={publication.id} className="mb-3">
                        <Card.Body>
                            <Card.Title>{publication.name}</Card.Title>
                            <Card.Text>Type: {publication.type}</Card.Text>
                            <Button variant="primary" href={publication.url} target="_blank">
                                View Publication
                            </Button>
                        </Card.Body>
                    </Card>
                ))
            ) : (
                <p>Loading publications...</p>
            )}
        </div>
    );

    // const Publications = () => {
    //     const [publications, setPublications] = useState([]);
    //
    //     useEffect(() => {
    //         const fetchData = async () => {
    //             try {
    //                 const response = await axios.get('/path/to/your/publications.json');
    //                 setPublications(response.data);
    //             } catch (error) {
    //                 console.error('Error fetching publications:', error);
    //             }
    //         };
    //
    //         fetchData();
    //     }, []);
    // }

    // const publications = [
    //     {
    //         id: 1,
    //         name: 'Publication 1',
    //         url: 'https://example.com/publication1',
    //         type: 'Book',
    //         date: 'January 1, 2021',
    //     },
    //     {
    //         id: 2,
    //         name: 'Publication 2',
    //         url: 'https://example.com/publication2',
    //         type: 'Whitepaper',
    //         date: 'January 1, 2021',
    //     },
    //     // Add more publication objects as needed
    // ];

    // return (
    //     <Container>
    //         <h2>Publications</h2>
    //         {Publications.map((publication) => (
    //             <Card key={publication.id} className="mb-3">
    //                 <Card.Body>
    //                     <Card.Title>{publication.name}</Card.Title>
    //                     <Badge pill bg="primary">
    //                         {publication.type}
    //                     </Badge>
    //                     <Card.Text>Type: {publication.type}</Card.Text>
    //                     <Card.Subtitle className="mb-2 text-muted">{publication.date}</Card.Subtitle>
    //                     <Button variant="outline-secondary" href={publication.url} target="_blank">
    //                         View
    //                     </Button>
    //
    //                 </Card.Body>
    //
    //             </Card>
    //         ))}
    //     </Container>
    // );
}

export default Publications;