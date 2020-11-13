const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // -> where is the root of our project
  output: {
    path: path.join(__dirname, "/build"),
    filename: "index_bundle.js",
  },
  //Loader
  module: {
    rules: [
      {
        test: /\.js$/, //Telling babel to look for all the js files
        exclude: /node_modules/, //Telling babel to ignore node_modules file
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
