import mongoose from "mongoose";
const {Schema, model} = mongoose;

const astronautaSchema = new Schema({
    nombre: {
      type: String,
      required: true,
    },
    nacionalidad: {
      type: String,
      required: true,
    },
    compañia_espacial: {
      type: String,
      required: true,
    },
    tiempo_espacio: {
      type: String,
      required: true,
    },
    misiones: {
      type: Number,
      required: true,
    },
  });
  
export const Astronauta = model('Astronauta', astronautaSchema);