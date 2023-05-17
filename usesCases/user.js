const User = require('../models/user');

const getUser = ({dependencies}) => async function(req){
    const {model} = dependencies
    return model.findOne({ email: req.body.email });
}

const crearUser = ({dependencies}) => async function(req,pass) {
    const {model} = dependencies
    const user = new model({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        role: req.body.role,
        password: pass
    });

    return user;
}


const getUsuarios = ({dependencies}) => async function() {
    const {model} = dependencies
    return model.find().select('-__v')
}

const buscarEmail = ({dependencies}) => async function(req) {
    const {model} = dependencies
    return model.findOne({ email: req.body.email });
}


module.exports = {
    getUser, crearUser,getUsuarios,buscarEmail
}
