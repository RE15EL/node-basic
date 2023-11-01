const fs = require('fs');

// writeFile
const contenido = 'Este es otro contenido que quiero escribir en el archivo.';

fs.writeFile('archivo.txt', contenido, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Archivo escrito exitosamente.');  
});

// writeFileSync
const contenido2 = 'contenido escrito de manera sincrona.';

try {
  fs.writeFileSync('archivo.txt', contenido2, 'utf8');
  console.log('Archivo escrito exitosamente.');
} catch (err) {
  console.error(err);
}

// readFile
fs.readFile('archivo.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('readFile Async >> ',data);
  });
  
  // readFileSync
  try {
    const data = fs.readFileSync('archivo.txt', 'utf8');
    console.log('readFile Sync >> ', data);
  } catch (err) {
    console.error(err);
  }

//   mkdir
fs.mkdir('nuevoDirectorio', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Directorio creado exitosamente.');
});
