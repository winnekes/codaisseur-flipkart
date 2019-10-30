import request from 'superagent';

export const SET_PRODUCTS = 'SET_PRODUCTS';

export function setProducts(products) {
    return {
        type: SET_PRODUCTS,
        payload: products
    };
}

export function getProducts() {
    return function(dispatch) {
        request
            .get('http://localhost:4000/products')
            .then(response => {
                dispatch(setProducts(response.body));
            })
            .catch(err => console.log(err));
    };
}
