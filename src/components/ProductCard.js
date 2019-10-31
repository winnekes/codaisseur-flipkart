import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { addToWishList } from '../actions/wishlist';
import { addToCart } from '../actions/cart';
import { connect } from 'react-redux';
function ProductCard(props) {
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
                <Button
                    variant="primary"
                    block
                    onClick={() => props.addToCart(product)}
                >
                    Add to cart
                </Button>
                <Button
                    variant="secondary"
                    block
                    onClick={() => props.addToWishList(product.id)}
                >
                    Add to WishList
                </Button>
            </Card.Body>
        </Card>
    );
}

export default connect(
    null,
    { addToWishList, addToCart }
)(ProductCard);
