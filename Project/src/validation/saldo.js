const Joi = require("joi");

const kuota = Joi.object({
    password: Joi.string().required().label("User Password").messages({
        "any.required": "{{label}} perlu diisi",
    }),
    jumlah: Joi.number().required().min(1000),
});

const saldo = Joi.object({
    password: Joi.string().required().label("User Password").messages({
        "any.required": "{{label}} perlu diisi",
    }),
    jumlah: Joi.number().required().min(1000),
});

module.exports = {
    kuota,
    saldo,
};
