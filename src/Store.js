import React from 'react';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger';
import App from './App';
import './tailwind.css';
import reducers from './reducers';

const loggerMiddleware = createLogger();

let middleware = [promiseMiddleware, thunkMiddleware];
if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, loggerMiddleware];
}

const store = createStore(reducers, applyMiddleware(...middleware));


const StoreContainer = () => (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)

export default StoreContainer;