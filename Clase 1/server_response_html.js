const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>¡Hola, itp!</h1><p>Esta pagina es de Nicko.</p>');
});

const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
