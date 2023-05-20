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

module.exports = {
    kirim,
    edit,
    terima,
};
