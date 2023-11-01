const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      // `body` contendrá los datos del cuerpo de la solicitud POST
      console.log('Datos del cuerpo:', body);

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('¡Solicitud POST recibida!\n');
    });
  } else {
    // Manejar otros métodos (GET, PUT, DELETE, etc.) según sea necesario
    res.statusCode = 405;
    res.end('Método no permitido\n');
  }
});

const puerto = 3000;

server.listen(puerto, '127.0.0.1', () => {
  console.log(`Servidor web iniciado en http://127.0.0.1:${puerto}/`);
});

