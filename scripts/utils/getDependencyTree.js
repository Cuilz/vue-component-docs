const deps = require('call-dependency');

/** get dependency tree
 * @param { Object } config
 * @return { Array }
 */
module.exports = function getComponentDependencyTree(config) {
  const { dependencyTreeDirs, fileExtensions, webpackConfig, baseDir } = config;
  const { extensions, alias } = webpackConfig.resolve;

	return deps(dependencyTreeDirs, {
    baseDir: baseDir,
		fileExtensions: fileExtensions,
		resolve: {
			alias: alias,
			extensions: extensions
		},
	});
};
