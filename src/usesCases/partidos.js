
const instanceAcon = ({dependencies}) => async(req) => {
    const {model} = dependencies
    const acont = new model({
        nombre: req.nombre,
        jugador: req.jugador,
        minuto: req.minuto,
        equipo: req.equipo
    });
    
    return await acont.save()
}

const instanceCambio = ({dependencies}) => async(req) => {
    const {model} = dependencies
    const cambio = new model({
        entra: req.entra,
        sale: req.sale,
        minuto: req.minuto,
        equipo: req.equipo
    });
    
    return await cambio.save()
}

const instanceGetPartidos = ({dependencies}) => async() => {
    const {model} = dependencies
    return model.find().select('-__v').populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1, _id:0 }).populate('cambios',{entra:1,sale:1,minuto:1,equipo:1,_id:0})
}

const instanceGetPartidoPop = ({dependencies}) => async(id) => {
    const {model} = dependencies
    return model.findById(id).populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1,_id:0}).populate('cambios',{entra:1,sale:1,minuto:1,equipo:1,_id:0})
}

const instanceGetPartidoById = ({dependencies}) => async(id) => {
    const {model} = dependencies
    return model.findById(id)
}

const instanceActualizar = ({dependencies}) => async(id, req, cambios,acontecimientos) => {
    const {model} = dependencies
    await model.updateOne({ _id: id }, {estado: req.body.estado, resultado:req.body.resultado, cambios: cambios, acontecimientos: acontecimientos});
}

const instanceInsertar = ({dependencies}) => async(req) => {
    const {model} = dependencies
    const partido = await model(req.body);
    await partido.save()
}

const instanceEstado = ({dependencies}) => async(estado) => {
    const {model} = dependencies
    return model.find({estado: estado}).select('-__v').select('-_id').populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1,_id:0}).populate('cambios',{entra:1,sale:1,minuto:1,equipo:1,_id:0})
}

const instanceLocal = ({dependencies}) => async(equipo) => {
    const {model} = dependencies
    return model.find({local: equipo}).select('-__v').select('-_id').populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1,_id:0}).populate('cambios',{entra:1,sale:1,minuto:1,equipo:1,_id:0})
}

const instanceVisitante = ({dependencies}) => async(equipo) => {
    const {model} = dependencies
    return model.find({visitante: equipo}).select('-__v').select('-_id').populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1,_id:0}).populate('cambios',{entra:1,sale:1,minuto:1,equipo:1,_id:0})
}

const instanceEquipo = ({dependencies}) => async(equipo) => {
    const {model} = dependencies
    return model.find({ $or: [ { local: equipo }, { visitante: equipo } ] } ).select('-__v').select('-_id').populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1,_id:0}).populate('cambios',{entra:1,sale:1,minuto:1,equipo:1,_id:0})
}

module.exports = {
    instanceAcon,instanceCambio,instanceGetPartidos,instanceGetPartidoPop,instanceGetPartidoById,instanceActualizar,instanceInsertar,instanceEstado,instanceLocal,instanceVisitante,instanceEquipo

}
