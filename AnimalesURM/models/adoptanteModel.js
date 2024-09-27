const mongoose = require('mongoose');

const AdopterSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  }
});

const Adopter = mongoose.model('Adopter', AdopterSchema);
module.exports = Adopter;
