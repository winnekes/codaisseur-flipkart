import { combineReducers } from "redux";
import products from "./products";
import category from "./category";
import selectCategory from "./selectCategory";
import wishlist from "./wishlist";

export default combineReducers({
	products,
	category,
	selectCategory,
	wishlist
});
