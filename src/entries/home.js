import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/containers/home';
//import data from '../api.json';
import { createStore, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux';
import reducer from '../reducers/index';
import { Map as map } from 'immutable';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
    reducer,
    map(),
    composeWithDevTools(
        applyMiddleware(
            thunk,
        )
    )
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const container = document.getElementById('home')


render(
    <Provider store={store}>
        <Home />
    </Provider>
    , container
)
