const Joi = require("joi");

const kirim = Joi.object({
    nama_barang: Joi.string()
        .required()
        .label("Nama Barang")
        .messages({ "any.required": "{{#label}} Perlu di Isi" }),
    berat_barang: Joi.number()
        .required()
        .label("Berat Barang")
        .messages({ "any.required": "{{#label}} Perlu di Isi" }),
    asal_barang: Joi.string()
        .required()
        .label("Asal Barang")
        .messages({ "any.required": "{{#label}} Perlu di Isi" }),
    tujuan_barang: Joi.string()
        .required()
        .label("Tujuan Barang")
        .messages({ "any.required": "{{#label}} Perlu di Isi" }),
});

const edit = Joi.object({
    id_barang: Joi.string().required().label("ID Barang").messages({
        "any.required": "{{#label}} Perlu di Isi",
        "string.external": "{{#label}} tidak valid",
    }),
    nama_barang: Joi.string()
        .required()
        .label("Nama Barang")
        .messages({ "any.required": "{{#label}} Perlu di Isi" }),
    berat_barang: Joi.number()
        .required()
        .label("Berat Barang")
        .messages({ "any.required": "{{#label}} Perlu di Isi" }),
    asal_barang: Joi.string()
        .required()
        .label("Asal Barang")
        .messages({ "any.required": "{{#label}} Perlu di Isi" }),
    tujuan_barang: Joi.string()
        .required()
        .label("Tujuan Barang")
        .messages({ "any.required": "{{#label}} Perlu di Isi" }),
});

const terima = Joi.object({
    id_barang: Joi.number().required().label("ID Barang").messages({
        "any.required": "Mohon {{#label}} Barang untuk diisi terlebih dahulu",
        "number.base": "{{#label}} harus diisi dengan benar",
    }),
});

const rate = Joi.object({
    id_barang: Joi.number().required().label("ID Barang").messages({
        "any.required": "Mohon {{#label}} Barang untuk diisi terlebih dahulu",
        "number.base": "{{#label}} harus diisi dengan benar",
    }),
    rating: Joi.number()
        .required()
        .min(1)
        .max(10)
        .label("Rating Barang")
        .messages({
            "any.required":
                "Mohon {{#label}} Barang untuk diisi terlebih dahulu",
            "number.base": "{{#label}} harus diisi dengan benar",
            "number.min": "{{#label}} rating paling kecil hanya bisa diisi 1",
            "number.max": "{{#label}} rating paling besar hanya bisa diisi 10",
        }),
});

module.exports = {
    kirim,
    edit,
    terima,
    rate,
};
