import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { store } from "./store";
import { persistor } from "./store";
import { Route } from "react-router-dom";

import { Provider } from "react-redux";
import { Container } from "react-bootstrap";
import WishListContainer from "./components/WishListContainer";
import Navigation from "./components/Navigation";
import CategoryListContainer from "./components/CategoryListContainer";
import ProductsListContainer from "./components/ProductsListContainer";
import ShoppingCartContainer from "./components/ShoppingCartContainer";
import { PersistGate } from "redux-persist/integration/react";
import Notification from "./components/Notification";
import Toast from "toasted-notes";
//import "toasted-notes/src/styles.css";
function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Navigation />
				<Notification />
				<Container>
					<Route exact path="/" component={CategoryListContainer}></Route>
					<Route exact path="/" component={ProductsListContainer}></Route>
					<Route exact path="/cart" component={ShoppingCartContainer}></Route>
					<Route exact path="/wishlist" component={WishListContainer}></Route>
				</Container>
			</PersistGate>
		</Provider>
	);
}

export default App;
