
const getUser = require('./user.js')
const getUsuarios = require('./user.js')
const crearUser = require('./user.js')
const buscarEmail = require('./user.js')

const userSchema = require('../models/user');


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


module.exports = {
    instanceUser , instanceSaveUser,instanceGetUsers,instanceCrearUsers,instanceEmail
}