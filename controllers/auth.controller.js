const useCases = require('../usesCases/index');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const logger = require('../logs/logger.js');

async function login(req, res){
    
    const user = await useCases.getUser(req);
    if (!user){ 
        logger.error('Usuario no encontrado')
        return res.status(400).json({ error: 'Usuario no encontrado' });
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword){
        logger.error('Contraseña no valida') 
        return res.status(400).json({ error: 'contraseña no válida' })
    }
    const token = jwt.sign({
        name: user.nombre,
        id: user._id,
        role: user.role
    }, process.env.TOKEN_SECRET)

    res.status(200).json({
        data: 'exito bienvenido',
        token: token
    })

    logger.info(`Ingreso exitoso: ${user}`)
    
}

async function register(req, res){

    const isEmailExist = await useCases.buscarEmail(req);
   
    if (isEmailExist) {
        logger.error('Email ya registrado')
        return res.status(400).json({error: 'Email ya registrado'})
    }

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const user = await useCases.crearUser(req,password);
    try {
        const savedUser = await useCases.guardarUser(user);
        res.status(200).json({
            error: null,
            message: 'registrado con exito',
            data: user
        })
        logger.info(`Usuario registrado con exito: ${user}`)
    } catch (error) {
        res.status(400).json({error})
        logger.error(`error: ${error}`)
    }
}

async function getUsuarios(req, res) {
    try {
      const users = await useCases.getUsuarios()
      res.json(users)
    } catch (error) {
      res.status(500).send('Internal Server Error')
      logger.error('Internal server Error')
    }
}

module.exports = {
    login,register,getUsuarios
};