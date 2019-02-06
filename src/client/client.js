import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Home from '../client/components/Home';
import Routes from './routes';
import {Provider} from 'react-redux';
import createStore from '../helper/createStore';

console.log('Hi John');

const store = createStore();

const element = (
    <Provider store={store}>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>
);

// need change render to hydrate
// ReactDom.hydrate(<Home/>, document.querySelector('#root'));
ReactDom.hydrate(element, document.querySelector('#root'));
