const Joi = require("joi");

const Kota = require("../models/Kota");

const cekKotaBerangkat = async (kota_keberangkatan) => {};

const set = Joi.object({
    kota_keberangkatan: Joi.string()
        .required()
        .external()
        .label("Kota Keberangkatan")
        .messages({
            "any.required": "{{#label}} perlu diisi",
        }),
});
