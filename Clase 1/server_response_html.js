const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Sirviendo la página HTML
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <h1>Hola, itp</h1>
      <p>Esta página es de Nicko.</p>
      <img src="/image" alt="Imagen divertida" style="max-width: 100%; height: auto;">
    `);
  } else if (req.url === '/image') {
    // Sirviendo la imagen
    const imagePath = path.join(__dirname, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wallpapers.com%2Ffrozone&psig=AOvVaw1TdkayXMZua4OwysMwRQkf&ust=1725582709591000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDw4ODGqogDFQAAAAAdAAAAABAE'); // Ruta de la imagen
    fs.readFile(imagePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error al cargar la imagen');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/png');
        res.end(data);
      }
    });
  } else {
    // Página no encontrada
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>404 Not Found</h1><p>La página no existe.</p>');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
