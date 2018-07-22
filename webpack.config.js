
const webpack = require('webpack');
const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    watch: true,
    mode: 'none',
    entry: {
        main: ['./development/ts/main.ts']
    },
  
    output: {
        filename: 'main.min.js',
        path: path.resolve(__dirname, './production/js/')
    },
 
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions:['.ts', '.tsx', '.js'],
        alias: {

        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { 
                            minimize: true
                        }
                    },
                    'sass-loader?sourceMap'
                ]
            },
            {   
                test: /\.ts?$/,
                use: 'ts-loader'
            }
        ]
    },
    plugins: [
    
      new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development,
        // ./public directory is being served
          host: 'localhost',
          port: 3000,
          server: { baseDir: ['production/'] }
      }),
      new UglifyJsPlugin()
      

          
      ]

    }

