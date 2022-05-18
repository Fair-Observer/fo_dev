const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: './server/index.js',
	output: {
		path: path.join(__dirname, '/functions'),
		filename: 'index.js'
	},
	target: 'node',
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: 
				{
					loader: 'babel-loader',
					options: {
	          presets: [
	              '@babel/preset-env',
	              '@babel/preset-react'
	          ],
	          plugins: [
	              '@babel/transform-runtime'
	          ]
	        }
				}
			},
      {
      	test: /\.css$/, 
      	use: {
					loader: 'ignore-loader'
				}
     	}
	  ]
	}
}
