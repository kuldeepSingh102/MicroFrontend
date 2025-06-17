const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      //inside of the rules arary we create a object means loader the goal of the loader is to tell web pack to process a specific type of file as we start to import them into our project
      // - the first loader is the babel loader
      // babel is incharge of processing all of our code from ES 2015 to so on and turn it into regular ES 5 code that all browser can understand
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
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
