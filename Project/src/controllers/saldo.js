const { kuota, saldo } = require("../validation/saldo");
const User = require("../models/User");
const { literal } = require("sequelize");

// STEVEN PUNYA
const topup_saldo = async (req, res) => {
    const { error, value } = saldo.validate(req.body, {
        abortEarly: false,
    });
    if (error) {
        const validationErrors = error.details.map((detail) => detail.message);
        return res.status(404).json({
            status: 404,
            msg: validationErrors,
        });
    }

    let api_key = req.headers["x-auth-token"];
    const { password, jumlah } = req.body;

    // Find User
    const user = await User.findOne({
        where: {
            api_key: api_key,
        },
    });

    if (user == null) {
        return res.status(404).json({
            status: 404,
            msg: "User not found!",
        });
    }
    if (user.password != password) {
        return res.status(401).json({
            status: 401,
            msg: "Password is incorrect!",
        });
    }

    // Tambah Saldo
    let currentUser = await User.update(
        {
            saldo: literal("saldo + " + jumlah),
        },
        {
            where: {
                id: user.id,
            },
        }
    );

    return res.status(201).json({
        status: 201,
        body: {
            nama: user.username,
            saldo: Number(user.saldo) + Number(jumlah),
            message: "Topup Saldo Berhasil!",
        },
    });
};

// RUBEN PUNYA
const topup_kuota = async (req, res) => {
    const { error, value } = kuota.validate(req.body, {
        abortEarly: false,
    });
    if (error) {
        const validationErrors = error.details.map((detail) => detail.message);
        return res.status(404).json({
            status: 404,
            msg: validationErrors,
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
            msg: {
                message: `Berhasil menambah api_hit sebanyak ${req.body.jumlah} kuota`,
                saldo: `Saldo anda sekarang ${pengguna.saldo}`,
                kuota: `Kuota anda sekarang ${pengguna.api_hit}`,
            },
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
