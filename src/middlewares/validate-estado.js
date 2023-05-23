import logger from '../logs/logger.js';

const verifyEst= (req, res, next) => {
    const est = req.body.estado
    if (est != "Terminado" && est !=="Jugando" && est !== "Proximamente"){
        logger.error(`Estado no valido`)
        return res.status(401).json({ error: 'Estado no valido' })
    }
    try {   
        next() 
    } catch (error) {
        res.status(401).json({ error: 'Acceso denegado' })
     }
    
}

module.exports = verifyEst;