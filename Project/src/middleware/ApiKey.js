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

    req.pengguna = user;
    next();
};

const checkRoles = (roles) => {
    return (req, res, next) => {
        if (roles != req.pengguna.dataValues.role) {
            return res.status(400).json({
                status: 400,
                msg: "NOT Sender Roles",
            });
        }
        next();
    };
};

module.exports = { checkApiKey, checkRoles };
