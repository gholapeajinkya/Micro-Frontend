const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");
const path = require("path");

const isProduction = process.env.NODE_ENV === "production";
const remoteAppUrl = isProduction
  ? "https://gholapeajinkya.github.io/Micro-Frontend/remote-app/remoteEntry.js"
  : "http://localhost:3002/remoteEntry.js";

module.exports = {
  entry: "./src/index",
  mode: isProduction ? "production" : "development",
  devServer: {
    port: 3001,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  output: {
    publicPath: "auto",
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "../docs/host-app"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "404.html", // fallback for GitHub Pages routing
    }),
    new ModuleFederationPlugin({
      name: "hostApp",
      remotes: {
        remoteApp: `remoteApp@${remoteAppUrl}`,
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: dependencies.react,
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  target: "web",
};
