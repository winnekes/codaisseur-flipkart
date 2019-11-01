import { combineReducers } from "redux";
import products from "./products";
import category from "./category";
import wishlist from "./wishlist";
import cart from "./cart";
import users from "./users";

export default combineReducers({
	products,
	category,
	wishlist,
	cart,
	users
});
