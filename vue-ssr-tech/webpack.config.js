const path = require('path');
const webpack =  require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const config  = {
    target:'web',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        // filename: 'bundle.js',//开发环境
        filename:'bundle.[hash:8].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },

            {
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1024,//小于1024转成base64
                            name:'[name]-aaa.[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({//判断环境
            'process.env':{
                NODE_ENV:isDev?'"development"':'"production"'
            }
        }),
        new HTMLPlugin()
    ]
};

if(isDev){
    config.module.rules.push({
        test:/\.styl/,
        use:[
            'style-loader',
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    sourceMap:true,
                }
            },
            'stylus-loader'
        ]
    },)
    config.devtool = '#cheap-module-eval-source-map',
    config.devServer={
        port:8000,
        host:'0.0.0.0',
        overlay:{//webpack编译出错可以显示在网页上
            errors:true
        },
        hot:true,//不刷新模块更新
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}else{//生产环境
    config.output.filename = '[name].[chunkhash:8].js';
    config.module.rules.push({
        test:/\.styl/,
        use:ExtractPlugin.extract({
            fallback: 'style-loader',
            use:[
                'css-loader',
                {
                    loader:'postcss-loader',
                    options:{
                        sourceMap: true,
                    }
                },
                'stylus-loader'
            ]
        })
    })
    config.plugins.push(
        new ExtractPlugin('styles.[contentHash:8].css')
    )
}

module.exports = config;