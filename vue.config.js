module.exports = {
    publicPath:'./',//打包工具
    devServer : {
            port : 8080,//该端口号
            // open :true,//启动服务器打开浏览器
               https : false,//是否启动http协议 ，false为不启动
            host: "localhost",//主机名字
        proxy:{
                //配置解决跨域问题
            "/dev-api":{
               //目标服务器代理访问到https://localhost:/db.json
                target:"http://localhost:8080",
                changeOrigin: true,
                pathRewrite:{
                    //会将/dev-api替换也就是、dev-api 移除
                    //如、dev-api/db.json代理到https://localhost:/db.json
                    "^/dev-api":""
                }
            }
        }
    },
    // 关闭eslint
    lintOnSave : false,
    //打包时不生成.map文件
    productionSourceMap : false//打包时不生成map后缀名文件
}

// module.exports = {
//     publicPath:"./",
//     devServer:{
//         port:8888,//设置端口号
//         https:false,//不开启https协议
//         host:"localhost",
//         // open:true
//     },
//     lintOnSave:false,//关闭eslint
//     productionSourceMap:false//打包时不生成.Map文件
// }