const router = require('express').Router();
const partidoController = require('../controllers/partidos.controller');
const verifyEst = require('../middlewares/validate-estado.js');

router.get("/", partidoController.getPartidos);

router.post("/insertar",verifyEst ,partidoController.insertar);

router.get("/:estado", partidoController.estado);

router.get("/local/:equipo", partidoController.local);
  
router.get("/visitante/:equipo", partidoController.visitante);

router.get("/equipo/:equipo",partidoController.equipo)

module.exports = router;