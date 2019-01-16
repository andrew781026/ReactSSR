const express = require('express');
const app = express();

const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;

app.use(express.static('client'));

app.get('/first', (req, res) => {
    // no js send to client
    const content = renderToString(<Home/>); // node 執行環境中 , 不支援 JSX
    res.send(content);
});


app.get('/', (req, res) => {

    // client use js with express static folder
    const content = renderToString(<Home/>);

    const html = `
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
        </head>
        <body>
            <div>${content}</div>
            <!-- get client side bundle.js with below -->
            <script src="bundle.js"></script>
        </body>
        </html>
    `;

    res.send(html);
});

app.listen(3001, () => {
    console.log('start server listen on 3001');
});