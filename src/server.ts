// Importa el módulo express
import express from 'express'; //ESM Ecmascript modules
import router from './router';

// Crea una instancia de una aplicación express
const app = express();

app.use('/', router);

export default app;