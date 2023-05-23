import  logger from '../logs/logger.js';
import {getPartidos,insertar,Estado,local,visitante,Equipo} from '../usesCases/index.js';

async function devolverPartidos(req, res) {
    try {
      const partidos = await getPartidos()
      res.json(partidos)
      res.status(200)
    } catch (error) {
      res.status(500).send('Internal Server Error')
      logger.error(`error: ${error}`)
    }
}

async function insertarPartido(req, res) {
    try {
      await insertar(req)
      res.status(200).send({message: "send"})
      logger.info(`Se inserto un partido correctamente`)
    } catch (error) {
      res.status(500).send('Internal Server Error')
      logger.error(`error: ${error}`)
    }
}

async function buscarEstado(req, res) {
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

async function buscarLocal(req, res) {
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

async function buscarVisitante(req, res) {
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

async function buscarEquipo(req, res) {
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

module.exports = {
    devolverPartidos,
    insertarPartido,
    buscarEstado,
    buscarLocal,
    buscarVisitante,
    buscarEquipo
  }
