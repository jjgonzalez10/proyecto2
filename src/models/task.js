const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
  informacionContacto: { type: String, required: true },
  resumen: { type: String, required: true },
  educacion: { type: String, required: true },
  experiencia: { type: String, required: true },
  habilidades: { type: String, required: true },
  idiomas: { type: String, required: true }
});

module.exports = mongoose.model('Task', TaskSchema);
