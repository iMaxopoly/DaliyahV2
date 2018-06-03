/* eslint-disable import/no-extraneous-dependencies,global-require */
const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const BrotliWebpackPlugin = require("brotli-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: ["babel-polyfill", "./src/index.js"]
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        resolve: { extensions: [".js", ".jsx"] },
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }]
      },
      {
        test: /\.html$/,
        use: [
          { loader: "file-loader", options: { name: "[name].html" } },
          { loader: "extract-loader" },
          { loader: "html-loader", options: { minimize: true } }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCSSExtractPlugin.loader },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [require("autoprefixer"), require("cssnano")]
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          { loader: "file-loader", options: { name: "images/[name].[ext]" } }
        ]
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({ filename: "[name]-[contenthash].css" }),
    new UglifyJsPlugin({
      cache: true,
      parallel: true
    }),
    new BrotliWebpackPlugin()
  ]
};
