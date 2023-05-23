import express from 'express';
import {login,register,usuarios} from '../controllers/auth.controller';
import Validator from'../middlewares/validator';

const router = express.Router();

router.post('/login', Validator('loginSchema'),login)

router.post('/register', Validator('registerSchema'),register)

router.get("/all",usuarios);

module.exports = router;