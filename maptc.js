const fs = require('fs').promises;

fs.readFile('package.json', 'utf8')
  .then((packageJson) => {
    return fs.stat('package.json')
      .then((stats) => {
        const packageObj = JSON.parse(packageJson);

        const info = {
          contenidoStr: packageJson,
          contenidoObj: packageObj,
          size: stats.size,
        };

        console.log(info);

        return fs.writeFile('info.txt', JSON.stringify(info, null, '\t'));
      })
      .then(() => {
        console.log('El objeto info ha sido guardado en info.txt');
      })
      .catch((err) => {
        console.error('Error:', err.message);
      });
  })
  .catch((err) => {
    console.error('Error:', err.message);
  });
