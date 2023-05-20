const Kota = require("../models/Kota");
const { set } = require("../validation/perjalanan");

// RD PUNYA
const cek_harga_durasi = async (req, res) => {};

// RUBEN PUNYA
const set_perjalanan = async (req, res) => {
    const { error, value } = set.validate(req.body, { abortEarly: false });
    if (error) {
        const validationErrors = error.details.map((detail) => detail.message);
        return res.status(404).json({
            status: 404,
            msg: validationErrors,
        });
    }
    let Errors = [];
    const berangkat = await Kota.findOne({
        where: { nama: req.body.kota_keberangkatan },
    });

    if (!berangkat) Errors.push("Kota Keberangkatan tidak terdaftar");

    const tujuan = await Kota.findOne({
        where: { nama: req.body.kota_tujuan },
    });

    if (!tujuan) Errors.push("Kota Tujuan tidak terdaftar");

    if (Errors.length > 0) {
        return res.status(404).json({
            status: 404,
            msg: Errors,
        });
    }
};

// RD PUNYA
const sender_lihat_riwayat = async (req, res) => {};

// SIMON PUNYA
const traveller_lihat_riwayat = async (req, res) => {};

// SIMON PUNYA
const complete_trip = async (req, res) => {};

module.exports = {
    cek_harga_durasi,
    set_perjalanan,
    sender_lihat_riwayat,
    traveller_lihat_riwayat,
    complete_trip,
};
