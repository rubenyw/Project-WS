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
};

// RD PUNYA
const sender_lihat_riwayat = async (req, res) => {};

// SIMON PUNYA
const traveller_lihat_riwayat = async (req, res) => {};

const complete_trip = async (req, res) => {};

module.exports = {
    cek_harga_durasi,
    set_perjalanan,
    sender_lihat_riwayat,
    traveller_lihat_riwayat,
    complete_trip,
};
