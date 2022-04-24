export default {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        // publicPath: '/dist/'
    },
    devServer: {
        static: {
            directory: 'dist'
        },
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            { test: [/\.jsx?$/], use: ['babel-loader']},
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //         // [style-loader](/loaders/style-loader)
            //         { loader: 'style-loader' },
            //         // [css-loader](/loaders/css-loader)
            //         {
            //             loader: 'css-loader',
            //             options: {
            //               modules: true
            //             }
            //         },
            //         // [sass-loader](/loaders/sass-loader)
            //         // { loader: 'sass-loader' }
            //     ]
            // },
            { test: [/\.svg$/, /\.png$/], use: ['file-loader']}
        ]
    }
}