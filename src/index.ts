import server from './server';

// Define el puerto en el que el servidor escuchará las solicitudes
// Si la variable de entorno PORT está definida, usa ese valor, de lo contrario, usa el puerto 4000
const port = process.env.PORT || 4000;

// Inicia el servidor en el puerto definido y muestra un mensaje en la consola
server.listen(port, () => {
  console.log('Server is running on port', port);
});