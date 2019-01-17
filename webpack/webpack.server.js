const path = require('path');
const baseConfig = require('./webpack.base');


const serverConfig = {

    // Inform webpack that we' re building a bundle
    // for NodeJS, rather than for the browser
    target: "node",

    // Tell webpack the root file of our server application
    entry: './src/index.js',

    // Tell webpack where to put the output file that is generated
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../build")
    },

};

module.exports = {...serverConfig, ...baseConfig};
