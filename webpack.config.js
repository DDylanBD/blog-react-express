const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'front-end/src/index.jsx'),

    output: {
        path: path.join(__dirname, 'front-end/public'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'front-end/src'),
                use: {
                  loader : 'babel-loader',
                  query: {
                      presets: ["react", "es2015"]
                  }
                }
            }, {
                test: /\.scss$/,
                include: path.join(__dirname, 'front-end/src/static/css'),
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }]
            }
        ],
    },
}
