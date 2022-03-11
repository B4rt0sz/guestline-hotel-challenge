const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|mp4)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|pdf)$/,
        type: 'asset/inline',
      },
    ],
  },

  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Guestline Hotel | Bartosz Szućko',
      template: path.resolve(__dirname, '..', './src/template/template.html'),
      favicon: path.resolve(__dirname, '..', './public/favicon.ico'),
      filename: 'index.html',
    }),
  ],
}
