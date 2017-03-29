const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'client/src/index.jsx'),

    output: {
        path: path.join(__dirname, 'client/public'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'client/src'),
                use: {
                  loader : 'babel-loader',
                  query: {
                      presets: ["react", "es2015"]
                  }
                }
            }, {
                test: /\.scss$/,
                include: path.join(__dirname, 'client/src/static/css'),
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
