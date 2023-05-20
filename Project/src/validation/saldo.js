const Joi = require("joi");

const kuota = Joi.object({
    password: Joi.string().required().label("User Password").messages({
        "any.required": "password perlu diisi",
    }),
    jumlah: Joi.number().required().min(1).messages({
        "any.required": "nominal perlu diisi",
        "number.min": "nominal pembelian minimal 1",
    }),
});

const saldo = Joi.object({
    password: Joi.string().required().label("User Password").messages({
        "any.required": "password perlu diisi",
    }),
    jumlah: Joi.number().required().min(1000).messages({
        "any.required": "nominal perlu diisi",
        "number.min": "nominal pembelian minimal 1000",
    }),
});

module.exports = {
    kuota,
    saldo,
};
