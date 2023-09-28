const fs = require('fs').promises;

async function main() {
  try {
    const packageJson = await fs.readFile('package.json', 'utf8');

    const stats = await fs.stat('package.json');

    const packageObj = JSON.parse(packageJson);

    const info = {
      contenidoStr: packageJson,
      contenidoObj: packageObj,
      size: stats.size,
    };

    console.log(info);

    await fs.writeFile('info.txt', JSON.stringify(info, null, '\t'));

    console.log('El objeto info ha sido guardado en info.txt');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
