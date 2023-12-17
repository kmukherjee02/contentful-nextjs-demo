/** This script creates the JSON config file that the
 *  Contentful CLI export needs to run
 */
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '../.env.local' });

const exportConfigFile = 'exportConfig.json';
const exportConfigFilePath = path.join(__dirname, exportConfigFile);

// if exportConfig.json
// does not exist create it. If it is blank or an empty object
// create it otherwise require it for logic
const writeExportConfigFile = (data, action) => {
	fs.writeFile(exportConfigFilePath, JSON.stringify(data), (err) =>
		err
			? () => {
					throw err;
			  }
			: console.log(`${exportConfigFile} ${action}`)
	);
};

let exportConfigData;
!fs.existsSync(exportConfigFilePath)
	? writeExportConfigFile({}, 'created')
	: fs.readFileSync(exportConfigFilePath).length < 10
	? writeExportConfigFile({}, 'created')
	: (exportConfigData = require(exportConfigFilePath));

const exportConfig = {
	spaceId: process.env.CONTENTFUL_SPACE_ID,
	managementToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
	environmentId: 'master',
	exportDir: './',
	contentFile: 'exportData.json',
	skipRoles: true,
	skipWebhooks: true
};

writeExportConfigFile(exportConfig, 'written');
