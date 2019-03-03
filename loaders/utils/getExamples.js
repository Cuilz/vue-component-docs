const fs = require('fs');
const path = require('path');
const requireIt = require('react-styleguidist/loaders/utils/requireIt');

const examplesLoader = path.resolve(__dirname, '../examples-loader.js');

/**
 * Get require statement for examples file if it exists, or for default examples if it was defined.
 *
 * @param {string} examplesFile
 * @param {string} displayName
 * @param {string} defaultExample
 * @returns {object|Array}
 */
module.exports = function getExamples(examplesFile, displayName, defaultExample) {
	if (examplesFile && fs.existsSync(examplesFile)) {
		return requireIt(`!!${examplesLoader}?customLangs=vue|js|jsx!${examplesFile}`);
	}

	if (defaultExample) {
		return requireIt(
			`!!${examplesLoader}?componentName=${displayName}&customLangs=vue|js|jsx!${defaultExample}`
		);
	}

	return [];
};
