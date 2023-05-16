const partidoSchema = require('../models/partido');
const aconSchema = require('../models/acontecimiento');
const cambiosSchema = require('../models/cambios');

async function createAcon(req) {
    const acont = new aconSchema({
        nombre: req.nombre,
        jugador: req.jugador,
        minuto: req.minuto,
        equipo: req.equipo
    });
    
    return await acont.save()
}

async function createCambio(req) {
    const cambio = new cambiosSchema({
        entra: req.entra,
        sale: req.sale,
        minuto: req.minuto,
        equipo: req.equipo
    });
    
    return await cambio.save()
}

async function getPartidos() {
    return partidoSchema.find().select('-__v').populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1, _id:0 }).populate('cambios',{entra:1,sale:1,minuto:1,equipo:1,_id:0})
}

async function getPartidoByIdPop(id) {
    return partidoSchema.findById(id).populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1,_id:0}).populate('cambios',{entra:1,sale:1,minuto:1,equipo:1,_id:0})
}

async function getPartidoById(id) {
    return partidoSchema.findById(id)
}

async function actualizar(id, req, cambios,acontecimientos) {
   await partidoSchema.updateOne({ _id: id }, {estado: req.body.estado, resultado:req.body.resultado, cambios: cambios, acontecimientos: acontecimientos});
}

async function insertar(req) {
    const partido = await partidoSchema(req.body);
    await partido.save()
}

async function estado(estado) {
    return partidoSchema.find({estado: estado}).select('-__v').select('-_id').populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1,_id:0}).populate('cambios',{entra:1,sale:1,minuto:1,equipo:1,_id:0})
}

async function local(equipo) {
    return partidoSchema.find({local: equipo}).select('-__v').select('-_id').populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1,_id:0}).populate('cambios',{entra:1,sale:1,minuto:1,equipo:1,_id:0})
}

async function visitante(equipo) {
    return partidoSchema.find({visitante: equipo}).select('-__v').select('-_id').populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1,_id:0}).populate('cambios',{entra:1,sale:1,minuto:1,equipo:1,_id:0})
}

async function equipo(equipo) {
    return partidoSchema.find({ $or: [ { local: equipo }, { visitante: equipo } ] } ).select('-__v').select('-_id').populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1,_id:0}).populate('cambios',{entra:1,sale:1,minuto:1,equipo:1,_id:0})
}

module.exports = {
    getPartidos,
    insertar,
    estado,
    local,
    visitante,
    equipo,
    actualizar,
    getPartidoById,
    getPartidoByIdPop,
    createAcon,
    createCambio
}
