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
//sementara (blm login)
const batalkan_barang = async (req, res) => {
    const barang = req.body.id_barang;
    await Barang.destroy({
        where: {
            id: barang
        }
    });

    return res.status(200).send({ message: `Kiriman dibatalkan` });
};

// RD PUNYA
const lihat_request = async (req, res) => {
    
};

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
    if (cek_barang.dataValues.id_sender != req.pengguna.dataValues.id) {
        return res.status(404).json({
            status: 404,
            msg: `Barang bukan milik anda`,
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
    if (cek_barang.dataValues.status == "PENDING") {
        return res.status(400).json({
            status: 404,
            msg: `Barang masih belum diambil`,
        });
    }

    let perjalanan = await Perjalanan.findByPk(
        cek_barang.dataValues.id_perjalanan
    );
    if (perjalanan.dataValues.status == "ONGOING") {
        return res.status(400).json({
            status: 404,
            msg: `Barang masih dalam perjalanan`,
        });
    }

    const result = await Rating.create({
        id_sender: req.user.dataValues.id,
        id_traveller: perjalanan.dataValues.id_traveller,
        rate: req.body.rating,
    });

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
