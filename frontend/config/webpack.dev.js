/* eslint-disable import/no-extraneous-dependencies,global-require */
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: ["babel-polyfill", "./src/index.js"]
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    overlay: true,
    contentBase: "dist"
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
          { loader: "html-loader" }
        ]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          { loader: "file-loader", options: { name: "images/[name].[ext]" } }
        ]
      }
    ]
  }
};
