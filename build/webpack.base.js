const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { resolve } = require('./utils');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'); // 检查ts
module.exports = {
  entry: resolve('../src/main.tsx'),
  output: {
    path: resolve('../dist'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      '@': resolve('../src'),
      '@components': resolve('../src/components'),
    }
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'url-loader'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('../public/index.html')
    }),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(),
  ],
  optimization: {
    namedModules: true
  }
};
