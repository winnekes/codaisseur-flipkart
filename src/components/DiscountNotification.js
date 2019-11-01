import React from 'react';
import { Toast } from 'react-bootstrap';

export default function DiscountNotification() {
    return (
        <Toast>
            <Toast.Header onClose={() => alert('hello')}>
                <strong className="mr-auto">Discount! Offer! Korting!</strong>
                <small>now</small>
            </Toast.Header>
            <Toast.Body>
                Act fast and add product to your cart for a discount.
            </Toast.Body>
        </Toast>
    );
}
