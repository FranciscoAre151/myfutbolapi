const useCases = require('../usesCases/partidos');
const logger = require('../logs/logger.js');

async function getPartidos(req, res) {
    try {
      const partidos = await useCases.getPartidos()
      res.json(partidos)
      res.status(200)
    } catch (error) {
      res.status(500).send('Internal Server Error')
      logger.error(`error: ${error}`)
    }
}

async function insertar(req, res) {
    try {
      await useCases.insertar(req)
      res.status(200).send({message: "send"})
      logger.info(`Se inserto un partido correctamente`)
    } catch (error) {
      res.status(500).send('Internal Server Error')
      logger.error(`error: ${error}`)
    }
}

async function estado(req, res) {
    try {
        const {estado} = req.params;
        const partidos = await useCases.estado(estado)
        res.json(partidos)
        res.status(200)
      } catch (error) {
        res.status(500).send('Internal Server Error')
        logger.error(`error: ${error}`)
      }
}

async function local(req, res) {
    try {
        const {equipo} = req.params;
        const partidos = await useCases.local(equipo)
        res.json(partidos)
        res.status(200)
      } catch (error) {
        res.status(500).send('Internal Server Error')
        logger.error(`error: ${error}`)
      }
}

async function visitante(req, res) {
    try {
        const {equipo} = req.params;
        const partidos = await useCases.visitante(equipo)
        res.json(partidos)
        res.status(200)
      } catch (error) {
        res.status(500).send('Internal Server Error')
        logger.error(`error: ${error}`)
      }
}

async function equipo(req, res) {
    try {
        const {equipo} = req.params;
        const partidos = await useCases.equipo(equipo)
        res.json(partidos)
        res.status(200)
      } catch (error) {
        res.status(500).send('Internal Server Error')
        logger.error(`error: ${error}`)
      }
}

module.exports = {
    getPartidos,
    insertar,
    estado,
    local,
    visitante,
    equipo
};
