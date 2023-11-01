const fs = require('fs');

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


