const path = require('path');
const baseConfig = require('./webpack.base');


const clientConfig = {


    // Tell webpack the root file of our server application
    entry: './src/client/client.js',

    // Tell webpack where to put the output file that is generated
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../client")
    },


};


module.exports = {...clientConfig, ...baseConfig};