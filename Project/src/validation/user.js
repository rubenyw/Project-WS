const Joi = require("joi");

const loginSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
        .label("Username")
        .messages({
            "any.required": "{{#label}} perlu diisi",
            "string.alphanum": "{{#label}} harus terdiri dari angka dan huruf",
            "string.min": "{{#label}} harus lebih dari 3 karakter",
            "string.max": "{{#label}} harus kurang dari 30 karakter",
        }),
    password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
});

const registerSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
        .label("Username")
        .messages({
            "any.required": "{{#label}} perlu diisi",
            "string.alphanum": "{{#label}} harus terdiri dari angka dan huruf",
            "string.min": "{{#label}} harus lebih dari 3 karakter",
            "string.max": "{{#label}} harus kurang dari 30 karakter",
        }),
    password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    email: Joi.string().email().required().label("Email Pengguna").messages({
        "any.required": "{{#label}} harus diisi",
        "string.email": "{{#label}} harus dalam format email",
    }),
    nomor_hp: Joi.string()
        .min(10)
        .max(14)
        .pattern(/^[0-9]+$/)
        .required()
        .label("Nomor HP")
        .messages({
            "any.required": "{{#label}} harus diisi",
            "string.pattern": "{{#label}} harus dalam pola angka 1 - 9",
        }),
});

module.exports = { loginSchema, registerSchema };
