import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { applyDiscount } from '../actions/cart';
import './shoppingcart.css';

class AddDiscountCodeForm extends Component {
    state = {
        discountCode: '',
        discountApplied: false
    };
    handleChange = event => {
        console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    };
    handleSubmit = event => {
        event.preventDefault();

        const discountCode = 'CODAISSEUR_IS_AWESOME';
        if (this.state.discountCode === discountCode) {
            this.setState({
                discountApplied: true
            });
            this.props.applyDiscount();
        }
    };

    render() {
        return (
            <div>
                {this.state.discountApplied && (
                    <Alert variant="info"> You applied the discount!</Alert>
                )}
                {!this.state.discountApplied && (
                    <Form className="discount" onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formDiscount">
                            <Form.Label>
                                <h3>Discount code</h3>
                                If you log in you will get a one-time-only
                                discount to apply here!
                            </Form.Label>
                            <Form.Control
                                name="discountCode"
                                onChange={this.handleChange}
                                value={this.state.discountCode}
                                type="text"
                                placeholder="enter here"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                )}
            </div>
        );
    }
}

export default connect(
    null,
    { applyDiscount }
)(AddDiscountCodeForm);
