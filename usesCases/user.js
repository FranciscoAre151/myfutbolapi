const User = require('../models/user');

async function getUser(req) {
    return User.findOne({ email: req.body.email });
}

async function crearUser(req,pass) {
    const user = new User({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        role: req.body.role,
        password: pass
    });

    return user;
}

async function guardarUser(user) {
    user.save()
}

async function getUsuarios() {
    return User.find().select('-__v')
}

async function buscarEmail(req) {
    return User.findOne({ email: req.body.email });
}


module.exports = {
    getUser, crearUser,guardarUser,getUsuarios,buscarEmail
}
