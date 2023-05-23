const Barang = require("../models/Barang");

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

    let request = await Barang.findOne();
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
};

module.exports = {
    kirim_barang,
    edit_barang,
    lacak_barang,
    batalkan_barang,
    lihat_request,
    terima_request,
    complete_request,
};
