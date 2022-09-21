const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  // entry: './src/index.js',
  entry: {
    all: ["./src/index.js", "./src/core.js"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Unicode Academy",
    })
  ],
  output: {
    //filename: 'index.js',
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

      {
        test: /\.(html|tpl)$/i,
        use: ["html-loader"],
      },
    ],
  },

  //   devtool: 'inline-source-map'

  //   optimization: {
  //     splitChunks: {
  //       chunks: "all",
  //     },
  //   },

//   optimization: {
//     minimizer: [new OptimizeCSSAssetsPlugin({})],
//   },
};
