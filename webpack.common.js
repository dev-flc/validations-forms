const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const TIME = new Date().getTime()
const { VERSION_APP, NAME_APP } = process.env

module.exports = {
  entry: {
    [NAME_APP]: {
      filename: `js/[name].${VERSION_APP}.${TIME}.[contenthash].js`,
      import: [
        path.resolve(__dirname, "./src/index.js"),
        path.resolve(__dirname, "./src/assets/styles/index.scss"),
      ],
    },
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        generator: {
          filename: `assets/images/[name].${VERSION_APP}.${TIME}.[hash][ext][query]`,
        },
        test: /\.(png|jpg|gif|svg)(\?[\s\S]+)?$/,
        type: "asset/resource",
      },
      {
        generator: {
          filename: `assets/fonts/[name].${VERSION_APP}.${TIME}.[hash][ext][query]`,
        },
        test: /\.(ttf|eot|otf)(\?[\s\S]+)?$/,
        type: "asset/resource",
      },
    ],
  },

  output: {
    chunkFilename: `js/[id].${VERSION_APP}.${TIME}.[contenthash].js`,
    chunkLoadTimeout: 30000,
    clean: true,
    filename: `js/[name].${VERSION_APP}.${TIME}.[contenthash].js`,
    path: path.resolve(__dirname, "public"),
    pathinfo: true,
    publicPath: "/",
    uniqueName: NAME_APP,
  },

  plugins: [
    new HtmlWebpackPlugin({
      cache: true,
      favicon: path.resolve(__dirname, "./src/assets/images/logo.svg"),
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.ejs"),
      title: NAME_APP,
      version: VERSION_APP,
    }),
  ],

  resolve: {
    alias: {
      /* Store */
      Actions: path.resolve(__dirname, "./src/store/actions"),
      /* Componets */
      Components: path.resolve(__dirname, "./src/components"),
      /* Store */
      Config: path.resolve(__dirname, "./src/store/config"),
      /* constants */
      Constants: path.resolve(__dirname, "./src/constants"),
      /* Containers */
      Containers: path.resolve(__dirname, "./src/containers"),
      /* assets */
      Fonts: path.resolve(__dirname, "./src/assets/fonts"),
      /* Hook */
      Hook: path.resolve(__dirname, "./src/hook"),
      /* assets */
      Images: path.resolve(__dirname, "./src/assets/images"),
      /* Store */
      Reducers: path.resolve(__dirname, "./src/store/reducers"),
      /* Routers */
      Routers: path.resolve(__dirname, "./src/routers"),
      /* Store */
      Selectors: path.resolve(__dirname, "./src/store/selectors"),
      Store: path.resolve(__dirname, "./src/store"),
      /* assets */
      Styles: path.resolve(__dirname, "./src/assets/styles"),
      /* Utils */
      Utils: path.resolve(__dirname, "./src/utils"),
      /* View */
      View: path.resolve(__dirname, "./src/view"),
    },
    extensions: [".js", ".json"],
  },
}
