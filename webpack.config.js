const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ development }) => ({
  mode: development ? "development" : "production",

  context: __dirname,
  devtool: development ? "source-map" : false,
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.styl$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "stylus-loader",
            options: {
              stylusOptions: {
                compress: true,
              },
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        use: "pug-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.pug"
    }),
  ],
});