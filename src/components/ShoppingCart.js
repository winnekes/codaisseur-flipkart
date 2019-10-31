import React from 'react';
import { Table, Alert, Button } from 'react-bootstrap';
import './shoppingcart.css';

import { connect } from 'react-redux';
import { removeFromCart, clearCart } from '../actions/cart';
import { Link } from 'react-router-dom';

function ShoppingCart(props) {
    return (
        <div className="shopping-cart">
            <h1>Your Shopping Cart</h1>{' '}
            {props.products.length < 1 && (
                <Alert variant="info">
                    Your cart is empty. How about you go back to the products
                    and start buying? <br />
                    <Link to="/">Go back to our awesome store</Link>
                </Alert>
            )}
            {props.products.length > 0 && (
                <div>
                    <Table hover>
                        <tbody>
                            {props.products.map(product => {
                                return (
                                    <tr key={product.id}>
                                        <td>
                                            <img
                                                className="product-img"
                                                alt={product.name}
                                                src={product.imageUrl}
                                            />
                                        </td>
                                        <td>{product.name}</td>
                                        <td>{product.description}</td>
                                        <td>{product.quantity}</td>
                                        <td>
                                            <Button
                                                variant="danger"
                                                onClick={() =>
                                                    props.removeFromCart(
                                                        product
                                                    )
                                                }
                                            >
                                                X
                                            </Button>
                                        </td>
                                        <td>{product.price}€</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="5">Total:</td>
                                <td>{props.total}€</td>
                            </tr>
                        </tfoot>
                    </Table>
                    <Button variant="danger" onClick={() => props.clearCart()}>
                        Clear whole cart
                    </Button>{' '}
                    <br />
                    <Link to="/">Back to our awesome store!</Link>
                </div>
            )}
        </div>
    );
}

export default connect(
    null,
    { removeFromCart, clearCart }
)(ShoppingCart);
