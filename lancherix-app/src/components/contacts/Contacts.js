import { useState } from 'react';
// import { Amplify/*, Storage, API*/ } from 'aws-amplify';
import { Amplify/*, Storage*/ } from 'aws-amplify';
import { graphqlOperation } from '@aws-amplify/api-graphql';

import { createContact } from '../../graphql/mutations';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { v4 as uuid } from 'uuid';

// Amplify.configure({
//   Auth: {
//     identityPoolId: 'us-east-1:f8acccd9-8b61-452c-b44a-4fb570c97cee',
//     region: 'us-east-1',
//     userPoolId: 'us-east-1_HmyJE6KMo',
//     userPoolWebClientId: '6ub3jiqcm9lrbq08ls78b8vmrg'
//   },
//   Storage: {
//     bucket: 'contact-storage1a0cb-dev',
//     region: 'us-east-1'
//   },
//   API: {
//     graphql_endpoint: 'https://i7pbpvwmkna2vbpd2fzlghyu3q.appsync-api.us-east-1.amazonaws.com/graphql',
//     graphql_endpoint_region: 'us-east-1',
//     authenticationType: 'API_KEY',
//     apiKey: 'da2-3zptsbzljfdebbnmd5wicfhhzm'
//   }
// });

const { Storage } = Amplify;

function Contacts() {
    const [contactData, setContactData] = useState({ name: "", email: "", cell: "" });
    const [profilePic, setProfilePic] = useState(null);

    const addNewContact = async () => {
        const { name, email, cell } = contactData;

        if (!profilePic) {
            alert("Please upload a profile picture");
            return;
        }

        // Upload pic to S3
        const { key } = await Storage.put(`${uuid()}.png`, profilePic, { contentType: 'image/png' });

        const newContact = {
            id: uuid(),
            name,
            email,
            cell,
            profilePicPath: key
        };

        // Persist new Contact
        await Amplify.API.graphql(graphqlOperation(createContact, { input: newContact }));
    };

    return (
        <Container>
            <Row className='px-4 my-5'>-</Row>
            <Row>-</Row>
            <Row className='px-4 my-5'>
                <Col><h1>Contacts</h1></Col>
            </Row>
            <Row>
                <Card style={{ width: '12rem' }}>
                    <Card.Img src='/img/contact_1.png' variant='top' />
                    <Card.Body>
                        <Card.Title>Isabella Rodriguez</Card.Title>
                        <Card.Text>
                            Hello Isa
                            <br />315.230.6864
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <Row className="px-4 my-5">
                <Col sm={3}>
                    <h2>Add New Contact</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Contact name"
                                value={contactData.name}
                                onChange={evt => setContactData({ ...contactData, name: evt.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Contact email"
                                value={contactData.email}
                                onChange={evt => setContactData({ ...contactData, email: evt.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Cell</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="nnn-nnn-nnnn"
                                value={contactData.cell}
                                onChange={evt => setContactData({ ...contactData, cell: evt.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Profile Pic</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/png"
                                onChange={evt => setProfilePic(evt.target.files[0])}
                            />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={addNewContact}>Add Contact &gt;&gt;</Button>&nbsp;
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contacts;
