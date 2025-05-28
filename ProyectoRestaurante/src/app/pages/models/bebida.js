const mongoose = require('mongoose');

const bebidaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  cost: {
    type: Number,
    required: true,
    min: 0,
  },
  size: {
    type: String, // Ej: "Pequeño", "Mediano", "Grande"
    required: true,
    trim: true,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Bebida', bebidaSchema);
