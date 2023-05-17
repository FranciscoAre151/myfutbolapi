// const partido = require('./partidos.js')
const getUser = require('./user.js')
const getUsuarios = require('./user.js')
const crearUser = require('./user.js')
const buscarEmail = require('./user.js')
// const partidoSchema = require('../models/partido');
// const aconSchema = require('../models/acontecimiento');
// const cambiosSchema = require('../models/cambios');
const userSchema = require('../models/user');

// const instancePartido = partido({
//     dependencies: {
//         model: partidoSchema
//     }
// })

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

// const instanceAcon = partido({
//     dependencies: {
//         model:aconSchema
//     }
// })

// const instanceCambios = partido({
//     dependencies: {
//         model: cambiosSchema
//     }
// })

module.exports = {
    instanceUser , instanceSaveUser,instanceGetUsers,instanceCrearUsers,instanceEmail
}