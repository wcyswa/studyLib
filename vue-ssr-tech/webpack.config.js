const path = require('path');


module.exports = {
    target:'web',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ]
            },
            {
              test:/\.styl/,
              use:[
                  'style-loader',
                  'css-loader',
                  'stylus-loader'
              ]
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
}