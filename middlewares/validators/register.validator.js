const Joi = require('@hapi/joi');

const registerSchema = Joi.object({
    nombre: Joi.string().min(1).max(255).required(),
    apellido: Joi.string().min(1).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
    role: Joi.string().min(1).max(1024)
});

module.exports = registerSchema;