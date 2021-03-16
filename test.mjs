import fs from 'fs/promises';

async function run () {
	console.log('mock test 1.');
	const data = {
		prop1: 'value'
	};
	await fs.writeFile('report.json', JSON.stringify(data, null, 2));
}

run();