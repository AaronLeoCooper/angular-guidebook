/**
 * Writes to a local app file the current project version
 */

const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const packageJson = require('./package.json');

const projectVersion = packageJson.version;
const versionEnvFilePath = path.join(__dirname, 'src/environments/env.version.ts');

console.info(`Writing v${projectVersion} to app environments...\n`);

fs.writeFileSync(versionEnvFilePath, getVersionExport(projectVersion), 'utf8', function (writeFileErr) {
  if (writeFileErr) {
    console.error(chalk.red(`Error writing to ${versionEnvFilePath}!`));

    throw new Error(writeFileErr);
  }

  console.info(chalk.green(`Wrote v${projectVersion} to ${versionEnvFilePath}!\n`));
});

function getVersionExport (versionNum) {
  return `// Provides the current project version as a constant
export const projectVersion = 'v${versionNum}';
`;
}
