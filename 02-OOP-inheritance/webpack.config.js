var path = require('path');
var webpack = require('webpack');
module.exports = {
     entry: './public/js/scripts.js',
     output: {
         path: path.resolve(__dirname, 'public/dist'),
         filename: 'app.bundle.js'
     },
     module: {
         rules:[  
                {  
                 test:/\.js$/,
                 exclude:/(node_modules|bower_components)/,
                 use:{  
                    loader:'babel-loader',
                    options:{  
                        presets:['@babel/preset-env']
                        }
                    }
                }
              ]
     },
     resolve: {
         extensions: ['*', '.js']
    },
     stats: {
         colors: true
     },
     devtool: 'source-map'
};