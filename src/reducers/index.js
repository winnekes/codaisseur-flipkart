import { combineReducers } from "redux";
import products from "./products";
import category from "./category";
import selectCategory from "./selectCategory";
import wishlist from "./wishlist";
import users from "./users";

export default combineReducers({
	products,
	category,
	selectCategory,
	wishlist,
	users
});
