
const instanceUser = ({dependencies}) => async(req) => {
    const {model} = dependencies
    return model.findOne({ email: req.body.email });
}

const instanceCrearUsers = ({dependencies}) => async(req,pass) => {
    const {model} = dependencies
    const user = new model({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        role: req.body.role,
        password: pass
    });

    return user.save();
}


const instanceGetUsers = ({dependencies}) => async() => {
    const {model} = dependencies
    return model.find().select('-__v')
}

const instanceEmail = ({dependencies}) => async(req) => {
    const {model} = dependencies
    return model.findOne({ email: req.body.email });
}


module.exports = {
    instanceUser , 
    instanceGetUsers,
    instanceCrearUsers,
    instanceEmail
}
