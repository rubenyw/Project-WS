const KTP = require("../models/KTP");
const User = require("../models/User");

const checkApiKey = async (req, res, next) => {
    if (!req.header("x-auth-token")) {
        return res.status(400).json({
            status: 400,
            msg: "Invalid API Key",
        });
    }

    const user = await User.findOne({
        where: {
            api_key: req.header("x-auth-token"),
        },
    });
    if (!user) {
        return res.status(400).json({
            status: 400,
            msg: "Invalid API Key",
        });
    }
    console.log(user);
    req.pengguna = user;
    next();
};

const checkRoles = (roles) => {
    return (req, res, next) => {
        if (roles != req.pengguna.role) {
            return res.status(400).json({
                status: 400,
                msg: `NOT ${roles} roles`,
            });
        }
        next();
    };
};

const checkKuota = async (req, res, next) => {
    if (req.pengguna.api_hit == 0) {
        return res.status(400).json({
            status: 400,
            msg: "Maaf kuota anda habis",
        });
    }

    next();
};

const checkUpload = async (req, res, next) => {
    const ktp = await KTP.findByPk(req.pengguna.id);
    if (ktp) {
        return res.status(404).json({
            status: 400,
            msg: "Anda sudah upload KTP",
        });
    }

    await KTP.create({ id_user: req.pengguna.id, status: "DONE", foto_ktp: `src/uploads/${req.pengguna.id}.png` });
    next();
};

module.exports = { checkApiKey, checkRoles, checkKuota, checkUpload };
