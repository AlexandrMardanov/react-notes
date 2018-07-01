// ------------------------------------
// Подробнее: https://github.com/webpack-contrib/html-loader
// Подробнее: https://github.com/jantimon/html-webpack-plugin
// ------------------------------------

import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlWebpackInlineSourcePlugin from 'html-webpack-inline-source-plugin'

export default () => ({
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('src', 'index.html'),
            filename: resolve('build', 'index.html'),
            chunks: ['main', 'vendor', 'runtime'],
            inject: true,
            inlineSource: 'runtime'
        }),
        new HtmlWebpackInlineSourcePlugin()
    ]
})
