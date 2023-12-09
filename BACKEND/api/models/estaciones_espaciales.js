import mongoose from "mongoose";
const {Schema, model} = mongoose;

const puertoSchema = new Schema({
    numero: {
      type: Number,
      required: true,
    },
    modulo: {
      type: String,
      required: true,
    },
    nacionalidad: {
      type: String,
      required: true,
    },
    fecha: {
      type: String,
      required: true,
    },
});

const estacionEspacialSchema = new Schema({
    nombre: {
      type: String,
      required: true,
    },
    puertos: {
      type: [puertoSchema],
      required: true,
    },
  });


export const EstacionEspacial = mongoose.model('EstacionEspacial', estacionEspacialSchema);