const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
    // rules: [
    //   {
    //     test: /\.js$/,
    //     exclude: /(node_modules|bower_components)/,
    //     use: {
    //       loader: "babel-loader"
    //     }
    //   },
    //   {
    //     test: /\.(png|svg|jpg|gif)$/,
    //     use: [
    //       {
    //         loader: "file-loader"
    //       }
    //     ]
    //   }
    // ]
  }
};
