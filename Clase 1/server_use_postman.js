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
        const data = JSON.parse(body); 

        if (data.nombre) {
          
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            message: `¡Hola, ${data.nombre}! Gracias por enviar tus datos.`,
            binario: `${letrasEnBinario.n} ${letrasEnBinario.s}`  
          }));
        } else {
          
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            error: 'Falta el campo "nombre". Por favor envía tu nombre en el cuerpo de la solicitud.'
          }));
        }
      } catch (error) {
        
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          error: 'Formato de datos incorrecto. Asegúrate de enviar un JSON válido.'
        }));
      }
    });
  } else {
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Envíame una solicitud POST con tu nombre en formato JSON.');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
