require('babel-polyfill').default;
const express = require('express');
const app = express();

const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;
const render = require('./helper/render').default;
const createStore = require('./helper/createStore').default;

app.use(express.static('client'));

app.get('/first', (req, res) => {
    // no js send to client
    const content = renderToString(<Home/>); // node 執行環境中 , 不支援 JSX
    res.send(content);
});


app.get('/*', (req, res) => {

    console.log('you request from server side');

    const store = createStore();

    res.send(render(req,store));
});

app.listen(3001, () => {
    console.log('start server listen on 3001');
});