const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let addedProduct = state.products.find(
                product => product.id === action.payload
            );
            let existingProductInCart = state.cart.find(
                product => action.payload === product.id
            );
            if (existingProductInCart) {
                addedProduct.quantity += 1;
                return {
                    ...state,
                    total: state.total + parseFloat(addedProduct.price)
                };
            } else {
                addedProduct.quantity = 1;
                let newTotal = state.total + parseFloat(addedProduct.price);

                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        {
                            productId: addedProduct.id,
                            quantity: addedProduct.quantity
                        }
                    ],
                    total: parseFloat(newTotal)
                };
            }
        default:
            return state;
    }
};
