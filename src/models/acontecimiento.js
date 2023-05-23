import mongoose from "mongoose";

const aconSchema = new mongoose.Schema({
    nombre:{
      type: String,
      required: true
    } ,
    jugador:{
      type: String
    },
    minuto: {
      type: Number,
      required: true
    } ,
    equipo: {
      type: String
    } 
  });
  
  module.exports = mongoose.model('Acontecimientos', aconSchema);