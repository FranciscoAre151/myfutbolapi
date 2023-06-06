import mongoose from "mongoose";

const cambiosSchema = new mongoose.Schema({
    entra:{
      type: String,
      required: true
    } ,
    sale:{
      type: String,
      required: true
    },
    minuto: {
      type: Number,
      required: true
    } ,
    equipo: {
      type: String
    },
    ocurredAt: {
      type: Date
    }
  });
  
  module.exports = mongoose.model('Cambios', cambiosSchema);