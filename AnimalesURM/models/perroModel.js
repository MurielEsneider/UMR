const mongoose = require('mongoose');

const DogSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  raza: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  tamaño: {
    type: String,
    required: true
  },
  estadoAdopcion: {
    type: String,
    enum: ['disponible', 'adoptado'],
    default: 'disponible'
  }
});

const Dog = mongoose.model('Dog', DogSchema);
module.exports = Dog;
