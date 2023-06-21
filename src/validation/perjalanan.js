const Joi = require("joi");

const set = Joi.object({
    kota_keberangkatan: Joi.string()
        .required()
        .label("Kota Keberangkatan")
        .messages({
            "any.required": "{{#label}} perlu diisi",
            "string.empty": "{{#label}} field tidak boleh kosong",
        }),
    kota_tujuan: Joi.string().required().label("Kota Tujuan").messages({
        "any.required": "{{#label}} perlu diisi",
        "string.empty": "{{#label}} field tidak boleh kosong",
    }),
});

const checkFlight = Joi.object({
    id_perjalanan: Joi.number().required().label("ID Perjalanan").messages({
        "any.required": "{{#label}} perlu diisi",
        "number.empty": "{{#label}} field tidak boleh kosong",
    }),
});

module.exports = {
    set,
    checkFlight,
};
