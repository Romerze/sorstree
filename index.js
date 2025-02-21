// Importa el módulo express
const express = require('express');

// Crea una instancia de una aplicación express
const app = express();

// Routing
// Define una ruta para la raíz ('/') que envía 'Hello World' como respuesta
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Inicia el servidor en el puerto 4000 y muestra un mensaje en la consola
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});