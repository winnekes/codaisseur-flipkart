import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';

import { Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import Navigation from './components/Navigation';

import { Container } from 'react-bootstrap';
import ProductsListContainer from './components/ProductsListContainer';

function App() {
    return (
        <Provider store={store}>
            <Navigation />
            <Container>
                <Route exact path="/" component={ProductsListContainer}></Route>
            </Container>
        </Provider>
    );
}

export default App;
