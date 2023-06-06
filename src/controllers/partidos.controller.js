import  logger from '../logs/logger.js';
import {getPartidos,
        insertar,
        Estado,
        local,
        visitante,
        Equipo,
        getPartidoById,
        createAcon,
        createCambio,
        getPartidoByIdPop,
        actualizar,
        createEquipo
      } from '../usesCases/index.js';

const devolverPartidos = async(req, res) => {
    try {
      const partidos = await getPartidos()
      res.json(partidos)
      res.status(200)
    } catch (error) {
      res.status(500).send('Internal Server Error')
      logger.error(`error: ${error}`)
    }
}

const insertarPartido = async(req, res) => {
    try {
      const localID = await createEquipo(req.body.local)
      const visID = await createEquipo(req.body.visitante)
      await insertar(localID._id,visID._id,req.body)

      res.status(200).send({message: "send"})
      logger.info(`Se inserto un partido correctamente`)
    } catch (error) {
      res.status(500).send('Internal Server Error')
      logger.error(`error: ${error}`)
    }
}

const buscarEstado = async(req, res) => {
    try {
        const {estado} = req.params;
        const partidos = await Estado(estado)
        res.json(partidos)
        res.status(200)
      } catch (error) {
        res.status(500).send('Internal Server Error')
        logger.error(`error: ${error}`)
      }
}

const buscarLocal = async(req, res) => {
    try {
        const {equipo} = req.params;
        const partidos = await local(equipo)
        res.json(partidos)
        res.status(200)
      } catch (error) {
        res.status(500).send('Internal Server Error')
        logger.error(`error: ${error}`)
      }
}

const buscarVisitante = async(req, res) => {
    try {
        const {equipo} = req.params;
        const partidos = await visitante(equipo)
        res.json(partidos)
        res.status(200)
      } catch (error) {
        res.status(500).send('Internal Server Error')
        logger.error(`error: ${error}`)
      }
}

const buscarEquipo = async(req, res) => {
    try {
        const {equipo} = req.params;
        const partidos = await Equipo(equipo)
        res.json(partidos)
        res.status(200)
      } catch (error) {
        res.status(500).send('Internal Server Error')
        logger.error(`error: ${error}`)
      }
}

const update = async(req, res) => {
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
      await actualizar(id,req.body,cambios,acontecimientos);
      updatedMatch = await getPartidoByIdPop(id);
      logger.info(`Partido actualizado`)
      
      return res.status(200).json(updatedMatch);

  }else{
      res.send({message: "no se pudo actualizar"})
   
      logger.error(`No se pudo actualizar`)
  }
}


module.exports = {
    devolverPartidos,
    insertarPartido,
    buscarEstado,
    buscarLocal,
    buscarVisitante,
    buscarEquipo,
    update
  }
