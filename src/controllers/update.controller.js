import {getPartidoById,createAcon,createCambio,getPartidoByIdPop,actualizar} from '../usesCases/index.js';
import logger from '../logs/logger.js';

async function update(req, res) {
    const {id} = req.params;
    let  updatedMatch = await getPartidoById(id);
    if(updatedMatch.estado == "Jugando" || updatedMatch.estado == "Proximamente" ){

        let acontecimientos = updatedMatch.acontecimientos;
        if(req.body.acontecimientos != null){
            const savedacon =  await createAcon(req.body.acontecimientos)
            acontecimientos = acontecimientos.concat(savedacon._id)
            
        }   
        let cambios = await updatedMatch.cambios;
        if(req.body.cambios != null){
            const nuevocambios = await createCambio(req.body.cambios)
            cambios =  cambios.concat(nuevocambios._id)
        }
        await actualizar(id,req,cambios,acontecimientos);
        updatedMatch = await getPartidoByIdPop(id);
        logger.info(`Partido actualizado`)
        
        return res.status(200).json(updatedMatch);

    }else{
        res.send({message: "no se pudo actualizar"})
     
        logger.error(`No se pudo actualizar`)
    }
}

module.exports = {
    update,
  }
  