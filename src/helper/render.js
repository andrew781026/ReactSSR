import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Routes from '../client/routes';
import {Provider} from 'react-redux';

const renderFunc = function (req, store) {

    const element = (
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <Routes/>
            </StaticRouter>
        </Provider>
    );

    // client use js with express static folder
    // const content = renderToString(<Home/>);
    const content = renderToString(element);

    const html = `
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>首頁</title>
             <link rel="shortcut icon" href="assets/favicon.ico" />
        </head>
        <body style="margin: 0">
            <div style="background-color: yellowgreen;padding-left: 8px">
                <h3>API Url</h3>
                <a href="http://react-ssr-api.herokuapp.com/" target="_blank">http://react-ssr-api.herokuapp.com/</a>
                <br>
            </div>
          
            <br>
            <div id="root" style="padding-left: 8px">${content}</div>
            <!-- get client side bundle.js with below -->
            <script src="bundle.js"></script>
        </body>
        </html>
    `;

    return html;
};


export default renderFunc;