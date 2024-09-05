const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Esta es la página principal, cuidado hacia donde te redireccionas');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Esta es la página "Acerca de"');
  } else if (req.url === '/troll1') {
    // Página Troll 1
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <h1>Troll 1</h1>
      <p>Esta pagina no es la correcta, es una página Troll 1.</p>
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.klipartz.com%2Fes%2Fsticker-png-xuvsn&psig=AOvVaw31r2gTY-g8FKWmuZgehni-&ust=1725583923454000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJiu5pfLqogDFQAAAAAdAAAAABAJ" alt="Troll image" style="max-width:100%; height:auto;">
    `);
  } else if (req.url === '/troll2') {
    // Página Troll 2
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <h1>¡Troll 2!</h1>
      <p>Esta página no es la correcta, es una página Troll 2.</p>
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.klipartz.com%2Fes%2Fsticker-png-xuvsn&psig=AOvVaw31r2gTY-g8FKWmuZgehni-&ust=1725583923454000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJiu5pfLqogDFQAAAAAdAAAAABAJ" alt="Troll image" style="max-width:100%; height:auto;">
    `);
  } else if (req.url === '/troll3') {
    // Página Troll 3
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <h1>¡Troll 3!</h1>
      <p>Esta página no es la correcta, es una página Troll 3.</p>
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.klipartz.com%2Fes%2Fsticker-png-xuvsn&psig=AOvVaw31r2gTY-g8FKWmuZgehni-&ust=1725583923454000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJiu5pfLqogDFQAAAAAdAAAAABAJ" alt="Troll image" style="max-width:100%; height:auto;">
    `);
  } else {
    // Página no encontrada
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Página no encontrada');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
