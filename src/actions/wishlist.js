export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";

export function addToWishList(productId) {
	console.log(`in set ${productId}`);
	return {
		type: ADD_TO_WISHLIST,
		payload: productId
	};
}
