import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';

import { connect } from 'react-redux';

class ShoppingCartContainer extends Component {
    render() {
        return <ShoppingCart />;
    }
}
const mapStateToProps = state => {
    return {
        products: state.products.products,
        cart: state.cart
    };
};

export default connect(
    mapStateToProps,
    {}
)(ShoppingCartContainer);
