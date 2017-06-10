import { common } from './src/environments/common';
const chalk = require('chalk');
const packageJson = require('./package.json');

const packageVersion = packageJson.version;
const envVersion = common.projectVersion;

function createLog (lines: string[]) {
  return lines.join('\n');
}

if (packageVersion !== envVersion) {

  const errorMsg = createLog(
    [
      chalk.red(`package.json version out of sync with app environment:`),
      `package.json version ${chalk.yellow(packageVersion)}`,
      `app env version ${chalk.yellow(envVersion)}`,
      '',
      `Update either ${chalk.yellow('package.json')} version, or ${chalk.yellow('src/environments/common.ts')} projectVersion.`,
      ''
    ]
  );

  throw new Error(errorMsg);

} else {

  console.info(createLog([
    chalk.green(`Angular Guidebook v${packageVersion} starting...`),
    ''
  ]));

}
