// webpack-node-externals: 不让第三方依赖打包到输出文件中

const { resolve } = require("path")
const { merge } = require("webpack-merge")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const nodeExternals = require("webpack-node-externals")

const baseConfig = require("./webpack.base.js")
const serverConfig = {
    mode: 'development',
    entry: resolve(__dirname, '../src/client/entry-server.js'),
    output: {
        filename: 'server-bundle.js',
        libraryTarget: "commonjs2" //! 指定编译规则
    },
    // 制定环境
    target: 'node',
    module: {
        test: '\.css$',
        use: [MiniCssExtractPlugin.loader, "css-loader"]
    },
    externals: nodeExternals(), // !不让第三方依赖打包到输出文件中
    module: {
        rules:
            [
                {
                    test: /\.css$/,
                    use: ["ignore-loader"]// 忽略掉
                }
            ]
    },
}

module.exports = merge(baseConfig, serverConfig)