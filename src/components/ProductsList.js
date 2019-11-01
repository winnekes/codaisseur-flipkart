import React from 'react';
import ProductCard from './ProductCard';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { sortProductsByPrice } from '../actions/products';
import { connect } from 'react-redux';

function ProductsList(props) {
    return (
        <div>
            <h1>Products</h1>
            <DropdownButton
                variant="light"
                id="dropdown-basic-button"
                title="Sort products by price: "
            >
                <Dropdown.Item
                    onClick={() => props.sortProductsByPrice('LOW_TO_HIGH')}
                >
                    low to high
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => props.sortProductsByPrice('HIGH_TO_LOW')}
                >
                    high to low
                </Dropdown.Item>
            </DropdownButton>
            <div className="products">
                {props.products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = reduxState => {
    return {
        wishlist: reduxState.wishlist.wishlist
    };
};
export default connect(
    mapStateToProps,
    { sortProductsByPrice }
)(ProductsList);
