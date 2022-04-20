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
        rules: [{
            test: [/\.jsx?$/],
            use: ['babel-loader']
        }]
    }
}