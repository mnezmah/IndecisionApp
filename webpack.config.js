// entry -> output
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = (env) =>  {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');
  console.log('env, env')
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
  // saying: whenewer you see and js file, run it through our app ,but exclude node_modules
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use:{
            loader: 'babel-loader',
            options:{ 
              presets:['@babel/preset-env','@babel/preset-react'], 
              plugins:['@babel/plugin-proposal-class-properties']
            } 
          }
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              'css-loader', 
              'sass-loader'
            ]
          }) 
        }]
   },
   plugins: [
     CSSExtract
   ],
   devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public')
    }
  };
};
