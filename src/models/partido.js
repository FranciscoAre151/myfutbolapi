import mongoose from "mongoose";
const { Schema } = mongoose;

const partidoSchema = new mongoose.Schema({
  local: {type: mongoose.Schema.Types.ObjectId, ref:'Equipo'},
  visitante:  {type: mongoose.Schema.Types.ObjectId, ref:'Equipo'},
  resultado: {
     type: String
  },
  estado:{
    type: String,
    required: true
  },
  acontecimientos:[ {type: mongoose.Schema.Types.ObjectId, ref:'Acontecimientos'}],
  cambios:[{ type: Schema.Types.ObjectId, ref: 'Cambios' }]
});


module.exports = mongoose.model('partido', partidoSchema);
