const Joi = require("joi");

//Strictly for creation only
const createUserSchema = Joi.object({
    firstname: Joi.string()
    .required(),
    
    lastname: Joi.string(),
    
    email: Joi.string()
    .email()
    .optional(),

    username: Joi.string()
    .alphanum()
    .min(3)
    .max(15)
    .required(),

    password: Joi.string()
    .alphanum()
    .required(),

    role: Joi.required()
})

const readUpdatesUserSchema = Joi.object({
    firstname: Joi.string(),
    
    lastname: Joi.string(),
    
    email: Joi.string()
    .email(),

    username: Joi.string()
    .alphanum()
    .min(3)
    .max(15),

    password: Joi.string()
    .alphanum(),

    id: Joi.number()
})