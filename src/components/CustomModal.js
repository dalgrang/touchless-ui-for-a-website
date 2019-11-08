import React, { useState } from 'react';
import { Modal, Image, Button } from 'react-bootstrap';

const CustomModal = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div className="mb-4">
            <div onClick={handleShow}
                 style={{ 'backgroundImage': `url(${props.imageUrl})`,
                          'backgroundRepeat': 'noRepeat',
                          'backgroundPosition': 'center center',
                          'backgroundSize': 'cover',
                          'paddingBottom': '100%',
                          'cursor': 'pointer'}}>
            </div>
            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body><Image src={props.imageUrl} fluid /></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
  }
  
export default CustomModal;