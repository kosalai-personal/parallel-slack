/*eslint no-undef: "error"*/
/*eslint-env node*/

const fs = require('fs');
const path = require('path');

const NODE_INDEX = Number(5 || 1);
const NODE_TOTAL = Number(5 || 1);
const TEST_FOLDER = './cypress/e2e';

// This log will be printed out to the console
// so that cypress will know which files will be run.
// Also, since getSpecFiles returns an array, the paths are
// joined with comma
console.log(getSpecFiles().join(','));

function getSpecFiles() {
  const allSpecFiles = walk(TEST_FOLDER);

  return allSpecFiles
    .sort()
    .filter((_, index) => index % NODE_TOTAL === NODE_INDEX - 1);
}

function walk(dir) {
  let files = fs.readdirSync(dir);
  files = files.map((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) return walk(filePath);
    else if (stats.isFile()) return filePath;
  });

  return files.reduce((all, folderContents) => all.concat(folderContents), []);
}
