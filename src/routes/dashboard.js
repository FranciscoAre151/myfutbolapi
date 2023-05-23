import express from 'express'

const dashboardController = require('../controllers/dashboard.controller');
const router = express.Router();

router.get('/', dashboardController.dash)

module.exports = router;