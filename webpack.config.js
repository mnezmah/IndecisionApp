// entry -> output
const path = require('path');
module.exports = (env) =>  {
  const isProduction = env === 'production';
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
            options:{ presets:['env','react'], 
                      plugins:['transform-class-properties']
                    } 
          }
        },
        {
          test: /\.s?css$/,
          use: [
            'style-loader',
            'css-loader',
           'sass-loader'
         ]
        }
      ]
   },
   devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public')
    }
  };
};
