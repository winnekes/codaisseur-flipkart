export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";

export function addToWishList(productId) {
	return {
		type: ADD_TO_WISHLIST,
		payload: productId
	};
}

export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";

export function removeFromWishList(product) {
	return {
		type: REMOVE_FROM_WISHLIST,
		payload: product
	};
}
