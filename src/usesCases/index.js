import {instanceAcon,
        instanceCambio,
        instanceGetPartidos,
        instanceGetPartidoPop,
        instanceGetPartidoById,
        instanceActualizar,
        instanceInsertar,
        instanceEstado,
        instanceLocal,
        instanceVisitante,
        instanceEquipo,
        instanceCrearEquipo
        } from './partidos.js'
        
import {instanceGetUser,instanceGetUsers,instanceCrearUsers,instanceEmail} from './user.js'

import userSchema from '../models/user';
import partidoSchema from '../models/partido';
import aconSchema from '../models/acontecimiento';
import cambiosSchema from '../models/cambios';
import equipoSchema from '../models/equipo.js';

const getUser = instanceGetUser({
    dependencies: {
        model: userSchema
    }
})

const createEquipo = instanceCrearEquipo({
    dependencies: {
        model: equipoSchema
    }
})


const  getUsuarios = instanceGetUsers({
    dependencies: {
        model: userSchema
    }
})

const  crearUser  = instanceCrearUsers({
    dependencies: {
        model: userSchema
    }
})

const buscarEmail  = instanceEmail({
    dependencies: {
        model: userSchema
    }
})

const createAcon  = instanceAcon({
    dependencies: {
        model: aconSchema
    }
})

const createCambio  = instanceCambio({
    dependencies: {
        model: cambiosSchema
    }
})

const getPartidos = instanceGetPartidos({
    dependencies: {
        model: partidoSchema
    }
})

const getPartidoByIdPop  = instanceGetPartidoPop({
    dependencies: {
        model: partidoSchema
    }
})

const getPartidoById = instanceGetPartidoById({
    dependencies: {
        model: partidoSchema
    }
})

const actualizar  = instanceActualizar({
    dependencies: {
        model: partidoSchema
    }
})

const  insertar = instanceInsertar({
    dependencies: {
        model: partidoSchema
    }
})

const Estado = instanceEstado({
    dependencies: {
        model: partidoSchema
    }
})

const local  = instanceLocal({
    dependencies: {
        partidoModel: partidoSchema,
        equipoModel: equipoSchema
    }
})

const visitante= instanceVisitante({
    dependencies: {
        partidoModel: partidoSchema,
        equipoModel: equipoSchema
    }
})

const Equipo  = instanceEquipo({
    dependencies: {
        partidoModel: partidoSchema,
        equipoModel: equipoSchema
    }
})

module.exports = {
    getUser,
    crearUser,
    getUsuarios,
    buscarEmail, 
    getPartidos,
    insertar,
    Estado,
    local,
    visitante,
    Equipo,
    actualizar,
    getPartidoById,
    getPartidoByIdPop,
    createAcon,
    createCambio,
    createEquipo
}