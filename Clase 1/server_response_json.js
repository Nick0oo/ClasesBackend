const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'Hola Itp!', status: 'success' }));
  res.end(JSON.stringify({ message: 'esto esta Interesante', status: 'success' }));
  
});

const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
