const http = require('http');

// Datos curiosos para la ruta /random-fact
const datosCuriosos = [
  "me gusta el café, pero no el té.",
];

// ASCII art personalizado con "Nicko"
const asciiArt = `
  _   _ _      _        
 | \\ | (_)    | |       
 |  \\| |_  ___| | _____ 
 | . \` | |/ __| |/ / _ \\
 | |\\  | | (__|   <  __/
 |_| \\_|_|\\___|_|\\_\\___|
`;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Ruta principal
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`${asciiArt}\n¡Bienvenido al servidor de Nicko!\nVisita las rutas: /about, /contact, /random-fact, /github, /instagram`);
  } else if (req.url === '/about') {
    // Ruta "Acerca de"
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('¡Este servidor fue creado por Nicko! Es una prueba creativa de un servidor en Node.js.');
  } else if (req.url === '/contact') {
    // Ruta "Contacto"
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Puedes contactarme en: nico.salas2205@gmail.com');
  } else if (req.url === '/random-fact') {
    // Ruta con dato curioso aleatorio
    const randomFact = datosCuriosos[Math.floor(Math.random() * datosCuriosos.length)];
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Dato Curioso: ${randomFact}`);
  } else if (req.url === '/github') {
    // Redirigir a GitHub
    res.writeHead(302, { 'Location': 'https://github.com/Nick0oo' });
    res.end();
  } else if (req.url === '/instagram') {
    // Redirigir a Instagram
    res.writeHead(302, { 'Location': 'https://www.instagram.com/nico__salas/' });
    res.end();
  } else {
    // Ruta no encontrada
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('¡Página no encontrada! Prueba otra ruta como /about, /contact, o /random-fact.');
  }
});

// Asignar el puerto y hacer que el servidor escuche en ese puerto
const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
