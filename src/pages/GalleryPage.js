import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CustomModal from '../components/CustomModal';

function GalleryPage() {

    return (
        <Container className="gallery">

            <div className="my-5 text-center">
                <h1>Gallery page</h1>
                <p>This is Gallery page </p>
                <p><Button as={Link} to="/blog">To Blog</Button></p>
            </div>

            <Row>
                <Col xs={6} md={3}>
                    <CustomModal imageUrl="/images/bear.jpg" />
                </Col>
                <Col xs={6} md={3}>
                    <CustomModal imageUrl="/images/bird.jpg" />
                </Col>
                <Col xs={6} md={3}>
                    <CustomModal imageUrl="/images/chicken.jpg" />
                </Col>
                <Col xs={6} md={3}>
                    <CustomModal imageUrl="/images/tiger.jpg" />
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={3}>
                    <CustomModal imageUrl="/images/dolphin.jpg" />
                </Col>
                <Col xs={6} md={3}>
                    <CustomModal imageUrl="/images/snake.jpg" />
                </Col>
                <Col xs={6} md={3}>
                    <CustomModal imageUrl="/images/dog.jpg" />
                </Col>
                <Col xs={6} md={3}>
                    <CustomModal imageUrl="/images/turtle.jpg" />
                </Col>
            </Row>
            <Row className="my-5">
                <Col>
                    <p>Lorem ipsum dolor sit amet, <Link to ="/">click this to go to Home page.</Link> Morbi mi risus, viverra ut dolor non, iaculis sagittis magna. Nulla ultricies tortor nec mi tempor, non tristique lacus placerat. Placerat at libero eu, lobortis placerat arcu. Pellentesque luctus vitae nisi nec consequat. Duis tincidunt, tellus eget consectetur pellentesque, dolor lacus fermentum nunc, sagittis pulvinar tortor ligula quis mi. Integer facilisis est nec iaculis lobortis. Vivamus viverra, neque in efficitur scelerisque, diam libero ultrices sem, quis tristique nunc dolor sit amet mi. Nullam at faucibus mi. Integer enim turpis, hendrerit vitae dui vitae, blandit sodales massa. Nulla iaculis efficitur justo, ultrices sollicitudin purus viverra ac. <Link to ="/blog">Click this to go to Blog page.</Link> Nunc vitae diam in justo vehicula pulvinar. Integer finibus neque viverra odio volutpat, ollicitudin efficitur erat placerat. In ut tempus ante.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <Link to ="/blog">click this to go to Blog page.</Link> Viverra ut dolor non, iaculis sagittis magna. Nulla ultricies tortor nec mi tempor, non tristique lacus placerat. Nam tortor lectus, placerat at libero eu. <Link to ="/">click this to go to Home page.</Link> Pellentesque luctus vitae nisi nec consequat. Duis tincidunt, tellus eget consectetur pellentesque, dolor lacus fermentum nunc, sagittis pulvinar tortor ligula quis mi. Integer facilisis est nec iaculis lobortis. Vivamus viverra, neque in efficitur scelerisque, diam libero ultrices sem, quis tristique nunc dolor sit amet mi. Nullam at faucibus mi. Integer enim turpis, hendrerit vitae dui vitae, blandit sodales massa. Nulla iaculis efficitur justo, ultrices sollicitudin purus viverra ac. Nunc vitae diam in justo vehicula pulvinar. Integer finibus neque viverra odio volutpat, sollicitudin efficitur erat placerat. <Link to ="/blog">click this to go to Blog page.</Link></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mi risus, viverra ut dolor non, <Link to ="/blog">click this to go to Blog page.</Link> Nulla ultricies tortor nec mi tempor, non tristique lacus placerat. Nam tortor lectus, placerat at libero eu, lobortis placerat arcu. Pellentesque luctus vitae nisi nec consequat. Duis tincidunt, tellus eget consectetur pellentesque, dolor lacus fermentum nunc, sagittis pulvinar tortor ligula quis mi. Integer facilisis est nec iaculis lobortis. Vivamus viverra, neque in efficitur scelerisque, diam libero ultrices sem, quis tristique nunc dolor sit amet mi. Nullam at faucibus mi. Integer enim turpis, hendrerit vitae dui vitae, blandit sodales massa. Nulla iaculis efficitur justo, ultrices sollicitudin purus viverra ac. Nunc vitae diam in justo vehicula pulvinar. Integer finibus neque viverra odio volutpat, sollicitudin efficitur erat placerat. In ut tempus ante.</p>
                </Col>
            </Row>

        </Container>
    )

}

export default GalleryPage;