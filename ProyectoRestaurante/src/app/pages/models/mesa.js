const mongoose = require('mongoose');

const mesaSchema = new mongoose.Schema({
  numChair: {
    type: Number,
    required: true,
    min: 1,
  },
  size: {
    type: String, // Ej: "Grande", "Mediana", "Pequeña"
    required: true,
    trim: true,
  },
  material: {
    type: String, // Ej: "Madera", "Metal", "Plástico"
    required: true,
    trim: true,
  },
  location: {
    type: String, // Ej: "Terraza", "Interior", "VIP"
    required: true,
    trim: true,
  },
  availability: {
    type: Boolean,
    default: true, // true = disponible, false = ocupada
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Mesa', mesaSchema);
