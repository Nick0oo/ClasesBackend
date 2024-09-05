const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/old-page') {
    // Redirección interna a /new-page
    res.writeHead(301, { 'Location': '/new-page' });
    res.end();
  } else if (req.url === '/new-page') {
    // Página nueva
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Ir a Git');
  } else if (req.url === '/github') {
    // Redirección a GitHub
    res.writeHead(301, { 'Location': 'https://github.com' });
    res.end('ir a Instagram');
  } else if (req.url === '/instagram') {
    // Redirección a Instagram
    res.writeHead(301, { 'Location': 'https://instagram.com' });
    res.end();
  } else if (req.url === '/surprise') {
    // Redirección a un sitio divertido
    res.writeHead(301, { 'Location': 'https://www.theuselessweb.com/' });
    res.end();
  } else {
    // Página no encontrada
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('usa comandos para redirigirte a la página que desees. los comandos son: /old-page, /new-page, /github, /instagram, /surprise');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});


