const express = require('express');
const app = express();

const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;


app.get('/', (req, res) => {
    const content = renderToString(<Home/>); // node 執行環境中 , 不支援 JSX
    res.send(content);
});


app.listen(3001, () => {
    console.log('start server listen on 3001');
});