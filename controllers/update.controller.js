const useCases = require('../usesCases/partidos');
const logger = require('../logs/logger.js');

async function update(req, res) {
    const {id} = req.params;
    let  updatedMatch = await useCases.getPartidoById(id);
    if(updatedMatch.estado == "Jugando" || updatedMatch.estado == "Proximamente" ){

        let acontecimientos = updatedMatch.acontecimientos;
        if(req.body.acontecimientos != null){
            const savedacon =  await useCases.createAcon(req.body.acontecimientos)
            acontecimientos = acontecimientos.concat(savedacon._id)
            
        }   
        let cambios = await updatedMatch.cambios;
        if(req.body.cambios != null){
            const nuevocambios = await useCases.createCambio(req.body.cambios)
            cambios =  cambios.concat(nuevocambios._id)
        }
        await useCases.actualizar(id,req,cambios,acontecimientos);
        updatedMatch = await useCases.getPartidoByIdPop(id);
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
  