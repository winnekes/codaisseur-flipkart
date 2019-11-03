import update from "react-addons-update";
const initialState = {
	cart: [],
	total: 0
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				cart: [
					...state.cart,
					{
						productId: action.payload.productId,
						quantity: 1,
						price: parseFloat(action.payload.price)
					}
				],
				total: state.total + parseFloat(action.payload.price * 1)
				/* const productToAdd = state.cart.find(
                product => product.productId === action.payload.productId
            );
            if (productToAdd) {
                productToAdd.quantity += 1;
                return {
                    ...state,
                    total: state.total + parseFloat(action.payload.price)
                };
            } else {
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        {
                            productId: action.payload.productId,
                            quantity: 1
                        }
                    ],
                    total: state.total + parseFloat(action.payload.price)
                };*/
			};
		case "REMOVE_FROM_CART":
			return {
				...state,
				cart: state.cart.filter(
					product => product.productId !== action.payload.productId
				),
				total: state.total - parseFloat(action.payload.price)
			};
		case "CLEAR_CART":
			return {
				...state,
				cart: [],
				total: 0
			};

		case "APPLY_DISCOUNT":
			return {
				...state,
				total: state.total - (state.total / 100) * action.payload
			};
		case "SET_QTY":
			return {
				...state,
				cart: state.cart.map(cartitem =>
					cartitem.productId === action.payload.productId
						? {
								...cartitem,
								quantity: parseInt(action.payload.quantity),
								price:
									parseInt(action.payload.quantity) *
									parseFloat(action.payload.price)
						  }
						: cartitem
				),
				total: state.total + parseFloat(action.payload.price)
				//total: state.cart.reduce((sum, cartItem) => sum + cartItem.price, 0)
			};

		case "SET_TOTAL":
			return {
				...state,
				total: state.cart.reduce((sum, cartItem) => sum + cartItem.price, 0)
			};

		default:
			return state;
	}
};
