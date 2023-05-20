const Barang = require("../models/Barang");

const { kirim, edit, terima } = require("../validation/barang");

// STEVEN PUNYA
const kirim_barang = async (req, res) => {
    try {
        const { error, value } = await kirim.validateAsync(req.body, {
            abortEarly: false,
        });
    } catch (error) {
        const validationErrors = error.details.map((detail) => detail.message);
        return res.status(404).json({
            status: 404,
            msg: validationErrors,
        });
    }
    const body = req.body;
    return res.status(202).json({
        status: 202,
        msg: "SUCCEED",
    });
};

// STEVEN PUNYA
const edit_barang = async (req, res) => {
    let id_kirimBarang = req.query.id_kirimBarang;
    const barang = await Barang.findByPk(id_kirimBarang);
    if (!barang) {
        return res.status(404).json({
            status: 404,
            msg: "Kode Barang tidak valid!",
        });
    }

    try {
        const { error, value } = await edit.validateAsync(req.body, {
            abortEarly: false,
        });
    } catch (error) {
        const validationErrors = error.details.map((detail) => detail.message);
        return res.status(404).json({
            status: 404,
            msg: validationErrors,
        });
    }

    const brng = await Barang.findAll();
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
};

// SIMON PUNYA
const complete_request = async (req, res) => {};

// RUBEN PUNYA
const rating = async (req, res) => {};

module.exports = {
    kirim_barang,
    edit_barang,
    lacak_barang,
    batalkan_barang,
    lihat_request,
    terima_request,
    complete_request,
};
