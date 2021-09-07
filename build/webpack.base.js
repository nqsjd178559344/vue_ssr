// client: 浏览器端
// server: 服务器端 => 无需配置css[不认识]
// ! 打包时同时打包两份[dev:build]
// nodemon: 动态监听文件改变
const { resolve } = require("path")
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    output: {
        path: resolve(__dirname, '../dist'),

    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']

            },
            {
                test: /\.js$/,
                use: ['babel-loader']

            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}