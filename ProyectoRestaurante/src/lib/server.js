const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const meseroRoutes = require('./routes/meseros');

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/meseros', meseroRoutes);

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(port, () => console.log(`Servidor en http://localhost:${port}`));
  })
  .catch(err => console.error('Error de conexión:', err));
