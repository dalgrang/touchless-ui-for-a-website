import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Carousel, Card, Button, Row, Col } from 'react-bootstrap';

function HomePage() {

    return (
        <Container>

            <Carousel className="my-5">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/100px400?text=First slide&bg=c14f4f"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/100px400?text=Second slide&bg=af4646"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/100px400?text=Third slide&bg=9c3d3d"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Row className="my-5">
                <Col className="d-flex">
                    <Card>
                        <Card.Img variant="top" data-src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title 1</Card.Title>
                            <Card.Text>Vivamus porta tellus leo, nec faucibus mi accumsan vitae.</Card.Text>
                            <Button as={Link} to='/blog'>To Blog</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex">
                    <Card>
                        <Card.Img variant="top" data-src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title 2</Card.Title>
                            <Card.Text>Maecenas at neque et magna semper faucibus.</Card.Text>
                            <Button as={Link} to='/gallery'>To Gallery</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="d-flex">
                    <Card>
                        <Card.Img variant="top" data-src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Card title 3</Card.Title>
                            <Card.Text>Donec a commodo massa, eget tincidunt erat.</Card.Text>
                            <Button as={Link} to='/blog'>To Blog</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="my-5">
                <Col>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <Link to ="/blog">click this to go to Blog page.</Link> Viverra ut dolor non, iaculis sagittis magna. Nulla ultricies tortor nec mi tempor, non tristique lacus placerat. Nam tortor lectus, placerat at libero eu. <Link to ="/gallery">click this to go to Gallery page.</Link> Pellentesque luctus vitae nisi nec consequat. Duis tincidunt, tellus eget consectetur pellentesque, dolor lacus fermentum nunc, sagittis pulvinar tortor ligula quis mi. Integer facilisis est nec iaculis lobortis. Vivamus viverra, neque in efficitur scelerisque, diam libero ultrices sem, quis tristique nunc dolor sit amet mi. Nullam at faucibus mi. Integer enim turpis, hendrerit vitae dui vitae, blandit sodales massa. Nulla iaculis efficitur justo, ultrices sollicitudin purus viverra ac. Nunc vitae diam in justo vehicula pulvinar. Integer finibus neque viverra odio volutpat, sollicitudin efficitur erat placerat. <Link to ="/blog">click this to go to Blog page.</Link></p>
                    <p>Lorem ipsum dolor sit amet, <Link to ="/gallery">click this to go to Gallery page.</Link> Morbi mi risus, viverra ut dolor non, iaculis sagittis magna. Nulla ultricies tortor nec mi tempor, non tristique lacus placerat. <Link to ="/blog">click this to go to Blog page.</Link> Placerat at libero eu, lobortis placerat arcu. Pellentesque luctus vitae nisi nec consequat. Duis tincidunt, tellus eget consectetur pellentesque, dolor lacus fermentum nunc, sagittis pulvinar tortor ligula quis mi. Integer facilisis est nec iaculis lobortis. Vivamus viverra, neque in efficitur scelerisque, diam libero ultrices sem, quis tristique nunc dolor sit amet mi. Nullam at faucibus mi. Integer enim turpis, hendrerit vitae dui vitae, blandit sodales massa. Nulla iaculis efficitur justo, ultrices sollicitudin purus viverra ac. Nunc vitae diam in justo vehicula pulvinar. Integer finibus neque viverra odio volutpat, sollicitudin efficitur erat placerat. In ut tempus ante.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mi risus, viverra ut dolor non, <Link to ="/blog">click this to go to Blog page.</Link> Nulla ultricies tortor nec mi tempor, non tristique lacus placerat. Nam tortor lectus, placerat at libero eu, lobortis placerat arcu. Pellentesque luctus vitae nisi nec consequat. Duis tincidunt, tellus eget consectetur pellentesque, dolor lacus fermentum nunc, sagittis pulvinar tortor ligula quis mi. Integer facilisis est nec iaculis lobortis. Vivamus viverra, neque in efficitur scelerisque, diam libero ultrices sem, quis tristique nunc dolor sit amet mi. Nullam at faucibus mi. Integer enim turpis, hendrerit vitae dui vitae, blandit sodales massa. Nulla iaculis efficitur justo, ultrices sollicitudin purus viverra ac. Nunc vitae diam in justo vehicula pulvinar. Integer finibus neque viverra odio volutpat, sollicitudin efficitur erat placerat. In ut tempus ante.</p>
                </Col>
            </Row>
            
        </Container>
    )

}

export default HomePage;