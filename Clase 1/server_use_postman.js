const http = require('http');

// Conversión de las letras "n" y "s" a binario
const letrasEnBinario = {
  n: '01101110',
  s: '01110011'
};

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      try {
        const data = JSON.parse(body);  // Intentamos parsear los datos como JSON

        if (data.nombre) {
          // Si tenemos un nombre, enviamos un saludo personalizado y las letras "ns" en binario
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            message: `¡Hola, ${data.nombre}! Gracias por enviar tus datos.`,
            binario: `${letrasEnBinario.n} ${letrasEnBinario.s}`  // Binario de "ns"
          }));
        } else {
          // Si falta el campo "nombre", enviamos un mensaje de error
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            error: 'Falta el campo "nombre". Por favor envía tu nombre en el cuerpo de la solicitud.'
          }));
        }
      } catch (error) {
        // Si el formato no es JSON válido
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          error: 'Formato de datos incorrecto. Asegúrate de enviar un JSON válido.'
        }));
      }
    });
  } else {
    // Respuesta a solicitudes GET o cualquier método que no sea POST
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Envíame una solicitud POST con tu nombre en formato JSON.');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
