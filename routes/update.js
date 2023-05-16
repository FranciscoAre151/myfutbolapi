const router = require('express').Router();
const updateController = require('../controllers/update.controller')

router.put("/:id", updateController.update);

module.exports = router;