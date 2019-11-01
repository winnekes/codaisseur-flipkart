import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";

import { Route } from "react-router-dom";

import { Provider } from "react-redux";
import { Container } from "react-bootstrap";
import WishListContainer from "./components/WishListContainer";
import Navigation from "./components/Navigation";
import CategoryListContainer from "./components/CategoryListContainer";
import ProductsListContainer from "./components/ProductsListContainer";
import ShoppingCartContainer from "./components/ShoppingCartContainer";
function App() {
	return (
		<Provider store={store}>
			<Navigation />
			<Container>
				<Route exact path="/" component={CategoryListContainer}></Route>
				<Route exact path="/" component={ProductsListContainer}></Route>
				<Route exact path="/cart" component={ShoppingCartContainer}></Route>
				<Route exact path="/wishlist" component={WishListContainer}></Route>
			</Container>
		</Provider>
	);
}

export default App;
