const path = require("path")
module.exports = {
    devServer: {
        // 监听端口
        port: 10200,
        // 关闭主机检查，使微应用可以被fetch
        disableHostCheck: true,
        // 配置跨域请求头，解决开发环境的跨域问题
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        hot: true,
        open: true
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src")
            }
        },
        output: {
            // 微应用的报名，这里与主应用中注册的微应用名称一致
            library: "VueMicroApp",
            // 将你的 library 暴露为所有的木块定义下都可以运行的方式
            libraryTarget: "umd",
            // 按需加载相关，设置为 webpackJsonp_VueMicroApp 即可
            jsonpFunction: `webpackJsonp_VueMicroApp`
        }
    },
    lintOnSave: false
}