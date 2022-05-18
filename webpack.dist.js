const path = require('path');

module.exports = {
	entry: './client/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index_bundle.js'
	},
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
      	use: 
      	{
					loader: 'ignore-loader'
				}
     	}
		]
	}
}