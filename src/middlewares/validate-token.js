import jwt from 'jsonwebtoken';
import logger from '../logs/logger.js';

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token){
        logger.error(`Acceso denegado`)
        return res.status(401).json({ error: 'Acceso denegado' })
    }
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next() 
    } catch (error) {
        res.status(400).json({error: 'token no es válido'})
        logger.error(`token no es valido`)
    }
}

module.exports = verifyToken;