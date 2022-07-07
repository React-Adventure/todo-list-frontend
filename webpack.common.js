const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: path.join(__dirname, 'public', 'favicon.ico'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              ['@babel/plugin-transform-runtime', {
                regenerator: true,
              }],
            ],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        resolve: {
          extensions: ['.tsx', '.ts', '.js'],
        },
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
              plugins: [
                // ['@babel/plugin-transform-flow-strip-types'],
                ['@babel/plugin-transform-runtime'/*, {
                  regenerator: true,
                }*/],
                // ['@babel/plugin-proposal-decorators', {
                //   legacy: true,
                // }],
                ['@babel/plugin-proposal-class-properties', { loose: false }],
              ],
              assumptions: {
                setPublicClassFields: true,
              },
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: 'url-loader',
        options: { limit: false },
      },
    ],
  },
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
