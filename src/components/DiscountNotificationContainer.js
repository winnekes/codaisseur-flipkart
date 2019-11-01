import React, { Component } from 'react';
import DiscountNotification from './DiscountNotification';
import { Toast } from 'react-bootstrap';

export default class DiscountNotificationContainer extends Component {
    state = {
        class: 'hidden',
        isToggled: false
    };
    render() {
        return (
            <Toast className={this.state.isToggled && 'hidden'}>
                <Toast.Header
                    onClick={() => this.setState({ isToggled: true })}
                >
                    <strong className="mr-auto">
                        Discount! Offer! Korting!
                    </strong>
                    <small>now</small>
                </Toast.Header>
                <Toast.Body>
                    As a new user you get a 15% discount on your shopping! Apply
                    the code during checkout:{' '}
                    <strong>CODAISSEUR_IS_AWESOME</strong>
                </Toast.Body>
            </Toast>
        );
    }
}
