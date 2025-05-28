const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    enum: ['Administrador', 'Mesero'],
    required: true,
  },
  imageUrl: {
    type: String,
    default: '', // Puede ser un path a una imagen por defecto
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true, // Crea createdAt y updatedAt automáticamente
});

module.exports = mongoose.model('Usuario', usuarioSchema);
