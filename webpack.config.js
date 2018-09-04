const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.js',
    library: libraryName,
    libraryTarget: 'umd',
    publicPath: '/dist/',
    umdNamedDefine: true
},
  module: {
    rules: [
      {
        test: /\.jsx|js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      }
    ]
  },
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
    }
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    }
  }
};
