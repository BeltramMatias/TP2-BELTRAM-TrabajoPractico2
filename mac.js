const fs = require('fs');

fs.readFile('package.json', 'utf8', (err, packageJson) => {
  if (err) {
    console.error('Error al leer el archivo:', err.message);
    return;
  }

  fs.stat('package.json', (err, stats) => {
    if (err) {
      console.error('Error al obtener el tamaño del archivo:', err.message);
      return;
    }

    const packageObj = JSON.parse(packageJson);

    const info = {
      contenidoStr: packageJson,
      contenidoObj: packageObj,
      size: stats.size,
    };

    console.log(info);

    fs.writeFile('info.txt', JSON.stringify(info, null, '\t'), (err) => {
      if (err) {
        console.error('Error al escribir el archivo info.txt:', err.message);
      } else {
        console.log('El objeto info ha sido guardado en info.txt');
      }
    });
  });
});
