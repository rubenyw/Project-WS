const Joi = require("joi");

const Kota = require("../models/Kota");

const cekKotaBerangkat = async (kota_keberangkatan) => {
    const result = await Kota.findOne({
        where: {
            kota: kota_keberangkatan,
        },
    });
    if (!result) throw new Error("Kota Keberangkatan tidak terdaftar");
};

const set = Joi.object({
    kota_keberangkatan: Joi.string()
        .required()
        .external(cekKotaBerangkat)
        .label("Kota Keberangkatan")
        .messages({
            "any.required": "{{#label}} perlu diisi",
        }),
    kota_tujuan: Joi.string()
        .required()
        .external(cekKotaBerangkat)
        .label("Kota Keberangkatan")
        .messages({
            "any.required": "{{#label}} perlu diisi",
        }),
});
