const Barang = require("../models/Barang");
const Rating = require("../models/Rating");
const Perjalanan = require("../models/Perjalanan");
const BarangPerjalanan = require("../models/BarangPerjalanan");

const { kirim, edit, terima, rate } = require("../validation/barang");

// STEVEN PUNYA
const kirim_barang = async (req, res) => {
    const { error, value } = kirim.validate(req.body, {
        abortEarly: false,
    });

    if (error) {
        const validationErrors = error.details.map((detail) => detail.message);
        return res.status(404).json({
            status: 404,
            msg: validationErrors,
        });
    }

    return res.status(202).json({
        status: 202,
        msg: "SUCCEED",
    });
};

// STEVEN PUNYA
const edit_barang = async (req, res) => {
    const { error, value } = edit.validate(req.body, {
        abortEarly: false,
    });

    if (error) {
        const validationErrors = error.details.map((detail) => detail.message);
        return res.status(404).json({
            status: 404,
            msg: validationErrors,
        });
    }

    return res.status(202).json({
        status: 202,
        msg: "SUCCEED",
    });
};

// STEVEN PUNYA
const lacak_barang = async (req, res) => {};

// RD PUNYA
const batalkan_barang = async (req, res) => {};

// RD PUNYA
const lihat_request = async (req, res) => {};

// RUBEN PUNYA
const terima_request = async (req, res) => {
    const { error, value } = terima.validate(req.body, {
        abortEarly: false,
    });
    if (error) {
        const validationErrors = error.details.map((detail) => detail.message);
        return res.status(404).json({
            status: 404,
            msg: validationErrors,
        });
    }

    let request = await Barang.findOne({ where: { id: req.body.id_barang } });
};

// SIMON PUNYA
const complete_request = async (req, res) => {};

// RUBEN PUNYA
const rating = async (req, res) => {
    const { error, value } = rate.validate(req.body, {
        abortEarly: false,
    });
    if (error) {
        const validationErrors = error.details.map((detail) => detail.message);
        return res.status(404).json({
            status: 404,
            msg: validationErrors,
        });
    }

    let cek_barang = await Barang.findByPk(req.body.id_barang);
    if (!cek_barang) {
        return res.status(404).json({
            status: 404,
            msg: `Tidak ditemukan barang dengan ID '${req.body.id_barang}`,
        });
    }

    cek_barang = await BarangPerjalanan.findOne({
        where: { id_barang: req.body.id_barang },
    });
    if (!cek_barang) {
        return res.status(404).json({
            status: 404,
            msg: `Barang belum diangkut dalam perjalanan`,
        });
    }

    return res.status(200).json({
        status: 200,
        msg: result,
    });
};

module.exports = {
    kirim_barang,
    edit_barang,
    lacak_barang,
    batalkan_barang,
    lihat_request,
    terima_request,
    complete_request,
    rating,
};
