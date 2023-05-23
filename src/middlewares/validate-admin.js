import jwt from 'jsonwebtoken'
import logger from '../logs/logger.js';

const verifyAdmin = (req, res, next) => {
    const token = req.header('auth-token')
    const t = jwt.verify(token, process.env.TOKEN_SECRET)
    if (t.role != "admin") {
        logger.error(`Acceso denegado, no admin`)
        return res.status(401).json({ error: 'Acceso denegado, se busca admin' })
    }
    try {
        next() 
    } catch (error) {
        logger.error(`token no es valido`)
        res.status(400).json({error: 'token no es válido'})
    }
}

module.exports = verifyAdmin;