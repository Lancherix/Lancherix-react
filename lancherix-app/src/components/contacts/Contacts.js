import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Contacts() {
    return (
        <Container>
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
                <Card style={{ width: '12rem' }}>
                    <Card.Img src='/img/contact_2.png' variant='top' />
                    <Card.Body>
                        <Card.Title>Isabella Rodriguez</Card.Title>
                        <Card.Text>
                            Hello Isa
                            <br />315.230.6864
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '12rem' }}>
                    <Card.Img src='/img/contact_3.png' variant='top' />
                    <Card.Body>
                        <Card.Title>Isabella Rodriguez</Card.Title>
                        <Card.Text>
                            Hello Isa
                            <br />315.230.6864
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default Contacts;