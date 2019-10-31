import React from 'react';
import { Table } from 'react-bootstrap';
import './shoppingcart.css';

export default function ShoppingCart() {
    return (
        <div className="shopping-cart">
            <h1>Your shopping cart</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Item count</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3">Total:</td>
                        <td>10</td>
                        <td>1000€</td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    );
}
