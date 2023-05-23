import express from 'express';
import  verifyEst from '../middlewares/validate-estado.js';
import {devolverPartidos,insertarPartido,buscarEstado,buscarEquipo,buscarLocal,buscarVisitante} from '../controllers/partidos.controller.js';

const router = express.Router();

router.get("/", devolverPartidos);

router.post("/insertar",verifyEst ,insertarPartido);

router.get("/:estado", buscarEstado);

router.get("/local/:equipo", buscarLocal);
  
router.get("/visitante/:equipo", buscarVisitante);

router.get("/equipo/:equipo", buscarEquipo)

module.exports = router;