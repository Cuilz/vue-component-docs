const webpack = require('webpack');
const makeWebpackConfig = require('./make-webpack-config');

module.exports = function build(config, dependencyTree, callback) {
	return webpack(makeWebpackConfig(config, 'production', dependencyTree), (err, stats) => {
		callback(err, stats);
	});
};
