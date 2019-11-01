import React, { Component } from 'react';
import { Toast, Modal, Button } from 'react-bootstrap';

export default function DiscountNotificationContainer(props) {
    return (
        <Modal
            show={props.show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Discount! Offer! Korting!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    As a new user you get a 15% discount on your shopping! Apply
                    the code during checkout:{' '}
                    <strong>CODAISSEUR_IS_AWESOME</strong>
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => props.closeModal()}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
