import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function ProductCard(props) {
    const product = props.product;

    return (
        <Card className="product-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    <p>{product.description}</p>
                    <p>Price: {product.price}€</p>
                </Card.Text>
                <Button variant="primary" block>
                    Add to cart
                </Button>
            </Card.Body>
        </Card>
    );
}
