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

module.exports = {
    set,
};
