import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Home from '../client/components/Home';
import Routes from './routes';

console.log('Hi John');

const element = (
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
);

// need change render to hydrate
// ReactDom.hydrate(<Home/>, document.querySelector('#root'));
ReactDom.hydrate(element, document.querySelector('#root'));
