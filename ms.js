const fs = require('fs');

try {
  const packageJson = fs.readFileSync('package.json', 'utf8');

  const fileSize = fs.statSync('package.json').size;

  const packageObj = JSON.parse(packageJson);

  const info = {
    contenidoStr: packageJson,
    contenidoObj: packageObj,
    size: fileSize,
  };

  console.log(info);

  fs.writeFileSync('info.txt', JSON.stringify(info, null, '\t'));
  
  console.log('El objeto info ha sido guardado en info.txt');
} catch (error) {
  console.error('Error:', error.message);
}
