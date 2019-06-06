const path = require('path');
const jquery = require('jquery');
const webpack = require('webpack');
//启用热更新时需要导入此模块
const htmlWebpackPlugin = require('html-webpack-plugin');
//所有的插件都需要放在plugin节点中.
const VueLoaderPlugin = require('vue-loader/lib/plugin');
//vue15.x之后的版本都需要引入此模块
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    //要被打包的文件,指定入口文件
    output: {
        path: path.join(__dirname, './dist'),
        //指定输出目录
        filename: 'bundel.js'
        //指定输出文件名称.
    },
    devServer: {
        //@dev-server 命令的第二种形式.
        open: true,
        //@自动打开浏览器.
        port: 3000,
        //@设置运行端口
        contentBase: 'src',
        //@设置托管根目录
        hot: true
        //@启动热加载


    },
    plugins: [
        //配置插件
        new webpack.HotModuleReplacementPlugin(),
        //启用热加载的 插件对象 此插件属于webpack内置. 
        new htmlWebpackPlugin({
            // @此插件功能:在内存中加载html文件.
            // template:path.join(__dirname,'/src/index.html'),	
            template: path.join(__dirname, '/src/index.html'),
            //@指定目标模板页面.
            filename: 'index.html'


        }), // new htmlWebpackPlugin({
        new VueLoaderPlugin()


    ], // plugins:[
    resolve: {

        alias: {
            "vue$": 'vue/dist/vue.js',
            //导入vue包的方式之一
        }
    },


    module: {
        rules: [
            //第三方匹配规则 
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {   test: /\.less$/,
                 use: ['style-loader', 'css-loader', 'less-loader'] 
            },
            {   test: /\.scss$/, 
                use: ['style-loader', 'css-loader', 'sass-loader'] 
            },
            {   test: /\.(ttf|eot|svg|woff|woff2)/, 
                use: 'url-loader' 
            },
            {
                test: /\.(jpg|jpeg|gif|bmp|png)/,
                use: 'url-loader?limit=20000&name=[hash:12][name].[ext]'
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)/,
                use: 'url-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
                //处理vue文件按类型的加载器
            },
            {
                test: /\.js$ /,
                use: 'babel-loader',
                exclude: /node_modules/
            }

        ] //rules

    } // module


};