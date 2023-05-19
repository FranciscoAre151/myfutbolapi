
const createAcon = ({dependencies}) => async function(req) {
    const {model} = dependencies
    const acont = new model({
        nombre: req.nombre,
        jugador: req.jugador,
        minuto: req.minuto,
        equipo: req.equipo
    });
    
    return await acont.save()
}

const createCambio = ({dependencies}) => async function(req) {
    const {model} = dependencies
    const cambio = new model({
        entra: req.entra,
        sale: req.sale,
        minuto: req.minuto,
        equipo: req.equipo
    });
    
    return await cambio.save()
}

const getPartidos = ({dependencies}) => async function() {
    const {model} = dependencies
    return model.find().select('-__v').populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1, _id:0 }).populate('cambios',{entra:1,sale:1,minuto:1,equipo:1,_id:0})
}

const getPartidoByIdPop = ({dependencies}) => async function(id) {
    const {model} = dependencies
    return model.findById(id).populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1,_id:0}).populate('cambios',{entra:1,sale:1,minuto:1,equipo:1,_id:0})
}

const getPartidoById = ({dependencies}) => async function(id) {
    const {model} = dependencies
    return model.findById(id)
}

const actualizar = ({dependencies}) => async function(id, req, cambios,acontecimientos) {
    const {model} = dependencies
    await model.updateOne({ _id: id }, {estado: req.body.estado, resultado:req.body.resultado, cambios: cambios, acontecimientos: acontecimientos});
}

const insertar = ({dependencies}) => async function(req) {
    const {model} = dependencies
    const partido = await model(req.body);
    await partido.save()
}

const estado = ({dependencies}) => async function(estado) {
    const {model} = dependencies
    return model.find({estado: estado}).select('-__v').select('-_id').populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1,_id:0}).populate('cambios',{entra:1,sale:1,minuto:1,equipo:1,_id:0})
}

const local = ({dependencies}) => async function(equipo) {
    const {model} = dependencies
    return model.find({local: equipo}).select('-__v').select('-_id').populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1,_id:0}).populate('cambios',{entra:1,sale:1,minuto:1,equipo:1,_id:0})
}

const visitante = ({dependencies}) => async function(equipo) {
    const {model} = dependencies
    return model.find({visitante: equipo}).select('-__v').select('-_id').populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1,_id:0}).populate('cambios',{entra:1,sale:1,minuto:1,equipo:1,_id:0})
}

const equipo = ({dependencies}) => async function(equipo) {
    const {model} = dependencies
    return model.find({ $or: [ { local: equipo }, { visitante: equipo } ] } ).select('-__v').select('-_id').populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1,_id:0}).populate('cambios',{entra:1,sale:1,minuto:1,equipo:1,_id:0})
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
