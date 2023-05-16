const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const Validator = require ('../middlewares/validator');

router.post('/login', Validator('loginSchema'),authController.login)

router.post('/register', Validator('registerSchema'),authController.register)

router.get("/all",authController.getUsuarios);

module.exports = router;