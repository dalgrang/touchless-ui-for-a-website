import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron, Accordion, Button, Card, Form, Row, Col } from 'react-bootstrap';

function BlogPage() {

    return (
        <Container>

            <Jumbotron className="my-5 bg-warning">
                <h1>Blog page</h1>
                <p>This is Blog page </p>
                <p><Button as={Link} to="/gallery">To Gallery</Button></p>
            </Jumbotron>

            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Blog 1
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <p>Quisque ante nisl, posuere ac dignissim vitae, elementum sed justo.</p> 
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Blog 2
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <p>Morbi ullamcorper urna at leo vehicula ultrices.</p> 
                            <p>In posuere urna diam, in sodales est aliquam ut. Sed gravida rhoncus mi.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Blog 3
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <p>Cras consequat, risus at malesuada scelerisque, eros mauris euismod nisl, a lacinia nunc mi lobortis magna.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        Blog 4
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                        <p>Phasellus ultricies finibus ipsum, vel porta justo.</p>
                        <p>Nullam maximus mauris leo, eu luctus libero maximus eget.</p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <Row className="my-5">
                <Col>
                    <p>Lorem ipsum dolor sit amet, <Link to ="/gallery">click this to go to Gallery page.</Link> Morbi mi risus, viverra ut dolor non, iaculis sagittis magna. Nulla ultricies tortor nec mi tempor, non tristique lacus placerat. Nam tortor lectus, placerat at libero eu, lobortis placerat arcu. Pellentesque luctus vitae nisi nec consequat. Duis tincidunt, tellus eget consectetur pellentesque, dolor lacus fermentum nunc, sagittis pulvinar tortor ligula quis mi. Integer facilisis est nec iaculis lobortis. Vivamus viverra, neque in efficitur scelerisque, diam libero ultrices sem, quis tristique nunc dolor sit amet mi. Nullam at faucibus mi. Integer enim turpis, hendrerit vitae dui vitae, blandit sodales massa. Nulla iaculis efficitur justo, ultrices sollicitudin purus viverra ac. Nunc vitae diam in justo vehicula pulvinar. Integer finibus neque viverra odio volutpat, sollicitudin efficitur erat placerat. In ut tempus ante.</p>
                </Col>
            </Row>

            <Form>
                <div key='inline-checkbox' className="mb-3">
                    <Form.Check inline label="Checkbox 1" type='checkbox' />
                    <Form.Check inline label="Checkbox 2" type='checkbox' />
                    <Form.Check inline label="Checkbox 3" type='checkbox' />
                </div>
            </Form>

            <Row className="my-5">
                <Col>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mi risus, viverra ut dolor non, iaculis sagittis magna. <Link to ="/">click this to go to Home page.</Link> Non tristique lacus placerat. Nam tortor lectus, placerat at libero eu, lobortis placerat arcu. Pellentesque luctus vitae nisi nec consequat. Duis tincidunt, tellus eget consectetur pellentesque, dolor lacus fermentum nunc, sagittis pulvinar tortor ligula quis mi. Integer facilisis est nec iaculis lobortis. Vivamus viverra, neque in efficitur scelerisque, diam libero ultrices sem, quis tristique nunc dolor sit amet mi. Nullam at faucibus mi. Integer enim turpis, hendrerit vitae dui vitae, blandit sodales massa. Nulla iaculis efficitur justo, ultrices sollicitudin purus viverra ac. Nunc vitae diam in justo vehicula pulvinar. Integer finibus neque viverra odio volutpat, sollicitudin efficitur erat placerat. In ut tempus ante.</p>
                    <p><Link to ="/gallery">Click this to go to Gallery page.</Link> Consectetur adipiscing elit. Morbi mi risus, viverra ut dolor non, iaculis sagittis magna. Nulla ultricies tortor nec mi tempor, non tristique lacus placerat. <Link to ="/">Click this to go to Home page.</Link>, placerat at libero eu, lobortis placerat arcu. Pellentesque luctus vitae nisi nec consequat. Duis tincidunt, tellus eget consectetur pellentesque, dolor lacus fermentum nunc, sagittis pulvinar tortor ligula quis mi. Integer facilisis est nec iaculis lobortis. Vivamus viverra, neque in efficitur scelerisque, diam libero ultrices sem, quis tristique nunc dolor sit amet mi. Nullam at faucibus mi. Integer enim turpis, hendrerit vitae dui vitae, blandit sodales massa. Nulla iaculis efficitur justo, ultrices sollicitudin purus viverra ac. Nunc vitae diam in justo vehicula pulvinar. Integer finibus neque viverra odio volutpat, sollicitudin efficitur erat placerat. In ut tempus ante.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mi risus, <Link to ="/gallery">Click this to go to Gallery page.</Link> Iaculis sagittis magna. Nulla ultricies tortor nec mi tempor, non tristique lacus placerat. Nam tortor lectus, placerat at libero eu, lobortis placerat arcu. Pellentesque luctus vitae nisi nec consequat. Duis tincidunt, tellus eget consectetur pellentesque, dolor lacus fermentum nunc, sagittis pulvinar tortor ligula quis mi. Integer facilisis est nec iaculis lobortis. Vivamus viverra, neque in efficitur scelerisque, diam libero ultrices sem, quis tristique nunc dolor sit amet mi. Nullam at faucibus mi. Integer enim turpis, hendrerit vitae dui vitae, blandit sodales massa. Nulla iaculis efficitur justo, ultrices sollicitudin purus viverra ac. Nunc vitae diam in justo vehicula pulvinar. Integer finibus neque viverra odio volutpat, sollicitudin efficitur erat placerat. In ut tempus ante.</p>
                </Col>
            </Row>
            
        </Container>
    )

}

export default BlogPage;