import HtmlWebpackPlugin from "html-webpack-plugin";
import path from 'path';
//
// work well after add extension '.ts'
//
import MyPlugin from './myPlugin/index.ts';

const config = {
    entry: './src/index',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './public',
        hot: true,
        inline: true,
        publicPath: '/',
        host: "0.0.0.0",
        port: 8080,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    },
    node: {
        fs: "empty",
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
        }),
        new MyPlugin({
            port: 8989
        })
    ]
};

export default config;
