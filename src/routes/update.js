import express from 'express'
import {update} from '../controllers/update.controller'

const router = express.Router();

router.put("/:id", update);

module.exports = router;