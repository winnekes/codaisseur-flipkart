import { combineReducers } from "redux";
import products from "./products";
import category from "./category";
import selectCategory from "./selectCategory";
import wishlist from "./wishlist";
import cart from "./cart";
import users from "./users";
import searchedProducts from "./searchedProducts";

export default combineReducers({
	products,
	category,
	selectCategory,
	wishlist,
	cart,
	users,
	searchedProducts
});
