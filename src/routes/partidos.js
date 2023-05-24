import express from 'express';
import  verifyEst from '../middlewares/validate-estado.js';
import {devolverPartidos,
        insertarPartido,
        buscarEstado,
        buscarEquipo,
        buscarLocal,
        buscarVisitante,
        update} from '../controllers/partidos.controller.js';

import verifyAdmin from '../middlewares/validate-admin.js';

const router = express.Router();

router.get("/", devolverPartidos);

router.post("/insertar",verifyEst ,insertarPartido);

router.get("/:estado", buscarEstado);

router.get("/local/:equipo", buscarLocal);
  
router.get("/visitante/:equipo", buscarVisitante);

router.get("/equipo/:equipo", buscarEquipo)

router.put("/update/:id",verifyAdmin, update);

module.exports = router;