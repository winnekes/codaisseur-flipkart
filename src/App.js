import React from 'react';
import './App.css';
import store from './store';

import { Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import Header from './components/Header';

function App() {
    return (
        <Provider store={store}>
            <Route exact path="/" component={Header} />
        </Provider>
    );
}

export default App;
