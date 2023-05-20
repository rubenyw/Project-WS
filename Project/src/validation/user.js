const Joi = require("joi");

const loginSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
        .label("Username")
        .messages({
            "any.required": "Username perlu diisi",
            "string.alphanum": "Username harus terdiri dari angka dan huruf",
            "string.min": "Username harus lebih dari 3 karakter",
            "string.max": "Username harus kurang dari 30 karakter",
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
            "any.required": "Username perlu diisi",
            "string.alphanum": "Username harus terdiri dari angka dan huruf",
            "string.min": "Username harus lebih dari 3 karakter",
            "string.max": "Username harus kurang dari 30 karakter",
        }),
    password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    email: Joi.string().email().required().label("Email Pengguna").messages({
        "any.required": "Email harus diisi",
        "string.email": "Email harus dalam format email",
    }),
    nomor_hp: Joi.string()
        .min(10)
        .max(14)
        .pattern(/^[0-9]+$/)
        .required()
        .messages({
            "any.required": "Nomor HP harus diisi",
            "string.pattern": "Nomor HP harus dalam pola angka 1 - 9",
        }),
});

module.exports = { loginSchema, registerSchema };
