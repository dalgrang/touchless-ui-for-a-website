import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Accordion, Button, Card, Form, Row, Col } from 'react-bootstrap';

function BlogPage() {

    return (
        <Container>

            <div className="jumbotron my-5 bg-warning">
                <h1>Blog page</h1>
                <p>This is Blog page </p>
                <p><Button as={Link} to="/gallery">To Gallery</Button></p>
            </div>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Blog Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        Purus in massa tempor nec feugiat nisl pretium. In arcu cursus euismod quis viverra nibh. Tincidunt dui ut ornare lectus sit amet est placerat in. Non blandit massa enim nec dui nunc mattis. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Nibh sed pulvinar proin gravida. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Nulla at volutpat diam ut. At volutpat diam ut venenatis tellus in metus. Sed felis eget velit aliquet sagittis id consectetur. Nunc id cursus metus aliquam.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Blog Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Turpis in eu mi bibendum neque egestas congue quisque. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. Donec et odio pellentesque diam volutpat. Facilisis sed odio morbi quis commodo. Massa vitae tortor condimentum lacinia quis vel. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Volutpat est velit egestas dui id. Nec tincidunt praesent semper feugiat nibh. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Blog Accordion Item #3</Accordion.Header>
                    <Accordion.Body>
                        Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam. Tristique senectus et netus et malesuada fames ac turpis egestas. Orci sagittis eu volutpat odio facilisis. Bibendum enim facilisis gravida neque convallis a cras. Nunc mattis enim ut tellus elementum. Laoreet non curabitur gravida arcu ac tortor dignissim. Vel eros donec ac odio. Aliquam sem et tortor consequat id porta nibh venenatis cras. Et pharetra pharetra massa massa ultricies mi. Vitae tempus quam pellentesque nec. Porttitor rhoncus dolor purus non enim praesent elementum.
                    </Accordion.Body>
                </Accordion.Item>
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