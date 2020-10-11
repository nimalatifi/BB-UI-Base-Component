import * as webpack from "webpack";
import  HtmlWebPackPlugin from "html-webpack-plugin";
const Dotenv = require('dotenv-webpack');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html"
});
const path = require( 'path' );

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      //sass loader
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ]
      },
      //babel loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ]
  },
  plugins: [htmlPlugin,  new Dotenv()],
  devtool: 'source-map'
};

export default config;