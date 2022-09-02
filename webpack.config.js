const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  target: "web",

  mode: "development",

  entry: {
    example: {
      filename: `js/[name].[contenthash].js`,
      import: [path.resolve(__dirname, "./example/index.js")],
    },
  },

  output: {
    chunkFilename: `js/[id].{TIME}.[contenthash].js`,
    chunkLoadTimeout: 30000,
    clean: true,
    filename: `js/[name].[contenthash].js`,
    path: path.resolve(__dirname, "public"),
    pathinfo: true,
    publicPath: "/",
  },

  resolve: {
    extensions: [".js"],
  },

  devServer: {
    allowedHosts: "all",
    historyApiFallback: true,
    host: "127.0.0.1",
    open: true,
    port: 8080,
    static: { directory: path.resolve(__dirname, "public") },
  },

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve("babel-loader"),
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      cache: true,
      filename: "index.html",
      template: path.resolve(__dirname, "./example/index.ejs"),
    }),
  ],
}
