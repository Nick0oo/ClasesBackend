const http = require('http');

// Listado de frases y chistes aleatorios
const frases = [
  "El que madruga… tiene sueño todo el día.",
  "¿Cuál es el café más peligroso del mundo? El ex-preso.",
  "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
  "Tengo un chiste sobre química, pero no voy a reaccionar.",
  "Mi computadora me dijo que necesitaba un descanso, ¡creo que está sobrecargada!"
];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: '¡Bienvenido a la API divertida de Nicko!', status: 'success' }));
  } else if (req.url === '/delayed') {
    // Simular una respuesta con retraso
    setTimeout(() => {
      res.statusCode = 200;
      res.end(JSON.stringify({ message: 'Respuesta con retraso de 2 segundos', status: 'delayed' }));
    }, 2000); // Espera 2 segundos antes de responder
  } else if (req.url === '/random-data') {
    // Generar datos aleatorios
    const randomNum = Math.floor(Math.random() * 100);
    const randomStr = Math.random().toString(36).substring(7);
    const randomDate = new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString();
    res.statusCode = 200;
    res.end(JSON.stringify({
      message: '¡Datos completamente aleatorios!',
      randomNumber: randomNum,
      randomString: randomStr,
      randomDate: randomDate
    }));
  } else if (req.url === '/time') {
    // Obtener la hora actual y un mensaje divertido
    const currentTime = new Date();
    let greeting;
    const hours = currentTime.getHours();

    if (hours < 12) {
      greeting = '¡Buenos días! ☕.';
    } else if (hours < 18) {
      greeting = '¡Buenas tardes! 🌞.';
    } else {
      greeting = '¡Buenas noches! 🌙.';
    }

    res.statusCode = 200;
    res.end(JSON.stringify({
      message: greeting,
      time: currentTime.toTimeString()
    }));
  } else if (req.url === '/joke') {
    // Devolver un chiste o frase aleatoria
    const randomIndex = Math.floor(Math.random() * frases.length);
    const randomJoke = frases[randomIndex];
    res.statusCode = 200;
    res.end(JSON.stringify({
      message: 'Aquí tienes un chiste aleatorio',
      joke: randomJoke
    }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Recurso no encontrado', status: 'fail' }));
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
