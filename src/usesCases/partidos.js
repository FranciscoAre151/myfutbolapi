
const instanceAcon = ({dependencies}) => async(acontecimiento) => {
    const {model} = dependencies
    const acont = new model({
        nombre: acontecimiento.nombre,
        jugador: acontecimiento.jugador,
        minuto: acontecimiento.minuto,
        equipo: acontecimiento.equipo
    });
    
    return await acont.save()
}

const instanceCrearEquipo = ({dependencies}) => async(equipo) => {
    const {model} = dependencies
    const equip = new model({
        nombre: equipo
    });
    
    return await equip.save()
}

const instanceCambio = ({dependencies}) => async(camb) => {
    const {model} = dependencies
    const cambio = new model({
        entra: camb.entra,
        sale: camb.sale,
        equipo: camb.equipo,
        ocurredAt: camb.ocurredAt,
    });
    
    return await cambio.save()
}

const instanceGetPartidos = ({dependencies}) => async() => {
    const {model} = dependencies
    return model.find().select('-__v').populate('local',{nombre:1 ,_id:0}).populate('visitante',{nombre:1 ,_id:0}).populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1, _id:0 }).populate('cambios',{entra:1,sale:1,equipo:1,ocurredAt:1,_id:0})
}

const instanceGetPartidoPop = ({dependencies}) => async(id) => {
    const {model} = dependencies
    return model.findById(id).populate('local',{nombre:1 ,_id:0}).populate('visitante',{nombre:1 ,_id:0}).populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1,_id:0}).populate('cambios',{entra:1,sale:1,equipo:1,ocurredAt:1,_id:0})
}

const instanceGetPartidoById = ({dependencies}) => async(id) => {
    const {model} = dependencies
    return model.findById(id)
}

const instanceActualizar = ({dependencies}) => async(id, body, cambios,acontecimientos) => {
    const {model} = dependencies
    await model.updateOne({ _id: id }, {estado: body.estado, resultado: body.resultado, cambios: cambios, acontecimientos: acontecimientos});
}

const instanceInsertar = ({dependencies}) => async(loc,vis,body) => {
    const {model} = dependencies
    const partido = new model({
        local:loc,
        visitante: vis,
        resultado: body.resultado,
        estado: body.estado,
        acontecimientos: body.acontecimientos,
        cambios: body.cambios
    });
    await partido.save()
}

const instanceEstado = ({dependencies}) => async(estado) => {
    const {model} = dependencies
    return model.find({estado: estado}).select('-__v').select('-_id').populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1,_id:0}).populate('cambios',{entra:1,sale:1,equipo:1,ocurredAt:1,_id:0})
}

const instanceLocal = ({dependencies}) => async(equipo) => {
    const {partidoModel,equipoModel} = dependencies
    const eq = await equipoModel.findOne({nombre: equipo})
    return await partidoModel.find({local: eq}).select('-__v').select('-_id').populate('local',{nombre:1 ,_id:0}).populate('visitante',{nombre:1 ,_id:0}).populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1,_id:0}).populate('cambios',{entra:1,sale:1,equipo:1,ocurredAt:1,_id:0})
}

const instanceVisitante = ({dependencies}) => async(equipo) => {
    const {partidoModel,equipoModel} = dependencies
    const eq = await equipoModel.findOne({nombre: equipo})
    return await partidoModel.find({visitante: eq}).select('-__v').select('-_id').populate('local',{nombre:1 ,_id:0}).populate('visitante',{nombre:1 ,_id:0}).populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1,_id:0}).populate('cambios',{entra:1,sale:1,equipo:1,ocurredAt:1,_id:0})
}

const instanceEquipo = ({dependencies}) => async(equipo) => {
    const {partidoModel,equipoModel} = dependencies
    const eq = await equipoModel.findOne({nombre: equipo})
    return partidoModel.find({ $or: [ { local: eq }, { visitante: eq } ] } ).select('-__v').select('-_id').populate('local',{nombre:1 ,_id:0}).populate('visitante',{nombre:1 ,_id:0}).populate('acontecimientos',{nombre:1, jugador:1,minuto:1, equipo:1,_id:0}).populate('cambios',{entra:1,sale:1,equipo:1,ocurredAt:1,_id:0})
}

module.exports = {
    instanceCrearEquipo,
    instanceAcon,
    instanceCambio,
    instanceGetPartidos,
    instanceGetPartidoPop,
    instanceGetPartidoById,
    instanceActualizar,
    instanceInsertar,
    instanceEstado,
    instanceLocal,
    instanceVisitante,
    instanceEquipo
}
