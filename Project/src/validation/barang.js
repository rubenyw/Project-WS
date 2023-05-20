const Joi = require("joi");

const Kota = require("../models/Kota");

const checkAsalKota = async (asal_barang) => {
    const result = await Kota.findOne({
        where: {
            nama: asal_barang.toUpperCase(),
        },
    });

    if (!result) throw new Error("Asal Kota tidak ditemukan");
};

const checkTujuanKota = async (tujuan_barang) => {
    const result = await Kota.findOne({
        where: {
            nama: tujuan_barang.toUpperCase(),
        },
    });
    console.log(result);
    if (!result) throw new Error("Tujuan Kota tidak ditemukan");
};

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
        .external(checkAsalKota)
        .label("Asal Barang")
        .messages({ "any.required": "{{#label}} Perlu di Isi" }),
    tujuan_barang: Joi.string()
        .required()
        .external(checkTujuanKota)
        .label("Tujuan Barang")
        .messages({ "any.required": "{{#label}} Perlu di Isi" }),
});

const edit = Joi.object({
    nama_barang: Joi.string().required(),
    berat_barang: Joi.number().required(),
    asal_barang: Joi.string().required(),
    tujuan_barang: Joi.string().required(),
});

const terima = Joi.object({
    id_barang: Joi.number().required().label("ID Barang").messages({
        "any.required": "Mohon ID Barang untuk diisi terlebih dahulu",
        "number.base": "{{#label}} harus diisi dengan benar",
    }),
});

module.exports = {
    kirim,
    edit,
    terima,
};
