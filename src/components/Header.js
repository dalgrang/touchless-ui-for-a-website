import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/General.css';
import PointPointer from '../components/PointPointer';
import AreaPointer from '../components/AreaPointer';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';

class Header extends React.Component {

    state = {
        faceInterface: null
    };

    setFaceInterface = (faceInterface) => {
        this.setState({ faceInterface });
    };
        
    render() {

        let selectedFaceInterface;
        
        if ( this.state.faceInterface === 'pointPointer' ) {
            selectedFaceInterface = 
                <PointPointer 
                    goBackEnabled = {this.props.goBackEnabled} 
                    goForwardEnabled = {this.props.goForwardEnabled} />
        } else if ( this.state.faceInterface === 'areaPointer' ) {
            selectedFaceInterface = 
                <AreaPointer 
                    goBackEnabled = {this.props.goBackEnabled} 
                    goForwardEnabled = {this.props.goForwardEnabled} 
                    currentPageKey = {this.props.currentPageKey} />
        }

        return (
            <header>
                <Container className="bg-dark py-5 text-white">
                    <Row>
                        <Col s={12} md={6} className="text-md-left">
                            <h3>Touchless User Interface<br />for Interacting with a Website</h3>
                        </Col>
                        <Col className="text-md-right">
                            <p>Interact with a website using the point/area pointers that are controlled by the position of the face and the facial expressions.</p>
                            <Button onClick={() => this.setFaceInterface("pointPointer")} 
                                variant="success" 
                                size="md" 
                                className="m-1">Point-pointer
                            </Button>
                            <Button 
                                onClick={() => this.setFaceInterface("areaPointer")} 
                                variant="info" 
                                size="md" 
                                className="m-1">Area-pointer
                            </Button>
                            <Button 
                                onClick={() => this.setFaceInterface("null")} 
                                variant="secondary" 
                                size="md" 
                                className="m-1">Turn Off
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Navbar bg="secondary" variant="dark">
                        <NavLink className="navbar-brand" to="/" activeClassName="is-active" exact={true}>Home</NavLink>
                        <Nav className="mr-auto">
                            <NavLink className="nav-link" to="/blog" exact={true}>Blog</NavLink>
                            <NavLink className="nav-link" to="/gallery" exact={true}>Gallery</NavLink>
                        </Nav>
                    </Navbar>
                </Container>
                {selectedFaceInterface}
            </header>
        )
    }
}


export default Header;