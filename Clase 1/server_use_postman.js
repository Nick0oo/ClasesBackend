const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`Datos recibidos Correctamente: ${body}`);
    });
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Envíame una solicitud POST para procesar datos.');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
