// Make sure user has webpack installed
require('./utils/ensureWebpack');
const setupLogger = require('react-styleguidist/scripts/logger');

const build = require('./build');
const server = require('./server');
const makeWebpackConfig = require('./make-webpack-config');
const getConfig = require('./config');
const binutils = require('./binutils');
const getDependencyTree = require('./utils/getDependencyTree');

const getNodeApi = function (config, dependencyTree) {
  return {
		/**
		 * Build style guide.
		 *
		 * @param {Function} callback callback(err, config, stats).
		 * @return {Compiler} Webpack Compiler instance.
		 */
		build(callback) {
			return build(config, dependencyTree, (err, stats) => callback(err, config, stats));
		},

		/**
		 * Start style guide dev server.
		 *
		 * @param {Function} callback callback(err, config).
		 * @return {ServerInfo.App} Webpack-Dev-Server.
		 * @return {ServerInfo.Compiler} Webpack Compiler instance.
		 */
		server(callback) {
			return server(config, dependencyTree, err => callback(err, config));
		},

		/**
		 * Return Styleguidist Webpack config.
		 *
		 * @param {string} [env=production] 'production' or 'development'.
		 * @return {object}
		 */
		makeWebpackConfig(env) {
			return makeWebpackConfig(config, env || 'production', dependencyTree);
		},

		binutils: {
			server: open => binutils.commandServer(config, open, dependencyTree),
			build: () => binutils.commandBuild(config, dependencyTree),
		},
	};
}

/**
 * Initialize Vue Styleguide API.
 *
 * @param {object} [config] Styleguidist config.
 * @param {function} [updateConfig] update config post resolution
 * @returns {object} API.
 */
module.exports = async function(config, updateConfig) {
	config = getConfig(config, config => {
		setupLogger(config.logger, config.verbose, {});
		if (typeof updateConfig === 'function') {
			updateConfig(config);
		}
		return config;
	});

  if (config.showDependency && config.dependencyTreeDirs) {
    const dependencyTree = await getDependencyTree(config);
    return getNodeApi(config, dependencyTree);
  } else {
    return getNodeApi(config);
  }
};
