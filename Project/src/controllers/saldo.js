const Joi = require("joi");

const topup_saldo = async (req, res) => {};
const topup_kuota = async (req, res) => {
    const schema = Joi.object({
        password: Joi.string().required(),
        jumlah: Joi.number().required().min(1000),
    });
    try {
        await schema.validateAsync(req.body);
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
    await pengguna.update({
        api_hit: Number(pengguna.dataValues.api_hit) + Number(req.body.jumlah),
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
const cek_saldo = async (req, res) => {};
const tarik_saldo = async (req, res) => {};

module.exports = {
    topup_kuota,
    topup_saldo,
    cek_saldo,
    tarik_saldo,
};
