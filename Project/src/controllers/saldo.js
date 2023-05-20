const { kuota, saldo } = require("../validation/saldo");

// STEVEN PUNYA
const topup_saldo = async (req, res) => {
    try {
        await saldo.validateAsync(req.body);
    } catch (error) {
        return res.status(404).json({
            status: 404,
            msg: error.toString(),
        });
    }
};

// RUBEN PUNYA
const topup_kuota = async (req, res) => {
    try {
        await kuota.validateAsync(req.body);
    } catch (error) {
        return res.status(404).json({
            status: 404,
            msg: error.toString(),
        });
    }
    const pengguna = req.pengguna;
    if (pengguna.dataValues.password != req.body.password) {
        return res.status(404).json({
            status: 404,
            msg: "Password Salah",
        });
    }

    const harga = Number(req.body.jumlah) * 1000;
    if (Number(pengguna.dataValues.saldo) < Number(harga)) {
        return res.status(400).json({
            status: 400,
            msg: "Saldo tidak cukup, tolong lakukan isi ulang terlebih dahulu",
        });
    }
    await pengguna.update({
        api_hit: Number(pengguna.dataValues.api_hit) + Number(req.body.jumlah),
        saldo: Number(pengguna.dataValues.saldo) - Number(harga),
    });

    return res.status(201).json({
        status: 201,
        body: {
            nama: pengguna.dataValues.username,
            api_hit: pengguna.dataValues.api_hit,
            msg: "Berhasil menambah api_hit",
        },
    });
};

// RD PUNYA
const cek_saldo = async (req, res) => {};

// SIMON PUNYA
const tarik_saldo = async (req, res) => {};

module.exports = {
    topup_kuota,
    topup_saldo,
    cek_saldo,
    tarik_saldo,
};
