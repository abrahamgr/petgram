const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest")
const WorkboxWebpackPlugin = require("workbox-webpack-plugin")
const path = require('path')

module.exports = {
    output: {
        filename: "app.bundle.js",
        publicPath: "/"
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new WebpackPwaManifestPlugin({
            name: 'Petgram - you app for poppies',
            short_name: 'Petgram',
            description: 'Your animals App',
            background_color: '#fff',
            theme_color: '#b1a',
            icons: [
                {
                    src: path.resolve('src/assets/icon.png'),
                    sizes: [ 96, 128, 192, 256, 384, 512 ]
                }
            ]
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            runtimeCaching: [
                {
                    urlPattern: new RegExp('https://(rest.cloudinary.com|images.unsplash.com)'),
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'images'
                    }
                },
                {
                    urlPattern: new RegExp('https://petgram-api-ten.vercel.app'),
                    handler: 'NetworkFirst',
                    options: {
                        cacheName: 'api'
                    }
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            }
        ]
    }
}
