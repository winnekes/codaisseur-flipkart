import React from 'react';
import { Table } from 'react-bootstrap';
import './shoppingcart.css';

import { Link } from 'react-router-dom';
export default function ShoppingCart(props) {
    return (
        <div className="shopping-cart">
            <h1>Your shopping cart</h1>
            {props.products.length < 1 && <p>Your cart is empty</p>}

            <Link to="/">back to home</Link>
            {props.products.length > 0 && (
                <Table bordered hover>
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
                                    <td>{product.price}€</td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4">Total:</td>
                            <td>{props.total}€</td>
                        </tr>
                    </tfoot>
                </Table>
            )}
        </div>
    );
}
