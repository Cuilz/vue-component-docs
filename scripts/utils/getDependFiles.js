/** get files which depends on file
 * @param { Object } dependencyTree
 * @param { String } filePath
 * @return { Array }
 */
export default function  getDependFiles(dependencyTree, filePath) {
  return Object
			.keys(dependencyTree)
			.filter((dep) => dependencyTree[dep].indexOf(filePath) >= 0);
}
