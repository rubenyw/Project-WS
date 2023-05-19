const User = require("../models/User");

const checkApiKey = async (req, res, next) => {
    if (!req.headers("x-auth-token")) {
        return res.status(400).json({
            status: 400,
            msg: "Invalid API Key",
        });
    }

    const user = await User.findOne({
        where: {
            api_key: req.headers("x-auth-token"),
        },
    });
    if (!user) {
        return res.status(400).json({
            status: 400,
            msg: "Invalid API Key",
        });
    }
};
