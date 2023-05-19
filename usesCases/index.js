getUser = require('./user.js')
getUsuarios =  require('./user.js')
crearUser = require('./user.js')
buscarEmail = require('./user.js')
const createAcon = require('./partidos.js')
const createCambio = require('./partidos.js')
const getPartidos = require('./partidos.js')
const getPartidoByIdPop = require('./partidos.js')
const getPartidoById = require('./partidos.js')
const actualizar = require('./partidos.js')
const insertar = require('./partidos.js')
const estado= require('./partidos.js')
const local= require('./partidos.js')
const visitante= require('./partidos.js')
const equipo= require('./partidos.js')
const userSchema = require('../models/user');
const partidoSchema = require('../models/partido');
const aconSchema = require('../models/acontecimiento');
const cambiosSchema = require('../models/cambios');

const instanceUser = getUser({
    dependencies: {
        model: userSchema
    }
})

const instanceGetUsers = getUsuarios({
    dependencies: {
        model: userSchema
    }
})

const instanceSaveUser = guardarUser({
    dependencies: {
        model: userSchema
    }
})

const instanceCrearUsers = crearUser({
    dependencies: {
        model: userSchema
    }
})

const instanceEmail = buscarEmail({
    dependencies: {
        model: userSchema
    }
})

const instanceAcon = createAcon({
    dependencies: {
        model: aconSchema
    }
})

const instanceCambio = createCambio({
    dependencies: {
        model: cambiosSchema
    }
})

const instanceGetPartidos = getPartidos({
    dependencies: {
        model: partidoSchema
    }
})

const instanceGetPartidoPop = getPartidoByIdPop({
    dependencies: {
        model: partidoSchema
    }
})

const instanceGetPartidoById = getPartidoById({
    dependencies: {
        model: partidoSchema
    }
})

const instanceActualizar = actualizar({
    dependencies: {
        model: partidoSchema
    }
})

const instanceInsertar = insertar({
    dependencies: {
        model: partidoSchema
    }
})

const instanceEstado = estado({
    dependencies: {
        model: partidoSchema
    }
})

const instanceLocal = local({
    dependencies: {
        model: partidoSchema
    }
})

const instanceVisitante = visitante({
    dependencies: {
        model: partidoSchema
    }
})

const instanceEquipo = equipo({
    dependencies: {
        model: partidoSchema
    }
})

module.exports = {
    instanceUser , 
    instanceSaveUser,
    instanceGetUsers,
    instanceCrearUsers,
    instanceEmail,
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