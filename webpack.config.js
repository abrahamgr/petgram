const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest")
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
