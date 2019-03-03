const createServer = require('./create-server');

module.exports = function server(config, dependencyTree, callback) {
	const env = 'development';
	const serverInfo = createServer(config, env, dependencyTree);

	serverInfo.app.listen(config.serverPort, config.serverHost, callback);

	return serverInfo;
};
