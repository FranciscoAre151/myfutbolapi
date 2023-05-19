const user = require('./user.js')
const partido = require('./partidos.js')

const userSchema = require('../models/user');
const partidoSchema = require('../models/partido');
const aconSchema = require('../models/acontecimiento');
const cambiosSchema = require('../models/cambios');

const getUser= user.instanceUser({
    dependencies: {
        model: userSchema
    }
})

const  getUsuarios = user.instanceGetUsers({
    dependencies: {
        model: userSchema
    }
})

const  crearUser  = user.instanceCrearUsers({
    dependencies: {
        model: userSchema
    }
})

const buscarEmail  = user.instanceEmail({
    dependencies: {
        model: userSchema
    }
})

const createAcon  = partido.instanceAcon({
    dependencies: {
        model: aconSchema
    }
})

const createCambio  = partido.instanceCambio({
    dependencies: {
        model: cambiosSchema
    }
})

const getPartidos = partido.instanceGetPartidos({
    dependencies: {
        model: partidoSchema
    }
})

const getPartidoByIdPop  = partido.instanceGetPartidoPop({
    dependencies: {
        model: partidoSchema
    }
})

const getPartidoById = partido.instanceGetPartidoById({
    dependencies: {
        model: partidoSchema
    }
})

const actualizar  = partido.instanceActualizar({
    dependencies: {
        model: partidoSchema
    }
})

const  insertar = partido.instanceInsertar({
    dependencies: {
        model: partidoSchema
    }
})

const estado = partido.instanceEstado({
    dependencies: {
        model: partidoSchema
    }
})

const local  = partido.instanceLocal({
    dependencies: {
        model: partidoSchema
    }
})

const visitante= partido.instanceVisitante({
    dependencies: {
        model: partidoSchema
    }
})

const equipo  = partido.instanceEquipo({
    dependencies: {
        model: partidoSchema
    }
})

module.exports = {
    getUser, crearUser,getUsuarios,buscarEmail , 
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