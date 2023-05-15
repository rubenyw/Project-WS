const User = require("../models/User");

const registerSender = (req, res) => {
    return res.status(200).send("HALO");
};
const loginSender = (req, res) => {};
const registerTraveller = (req, res) => {};
const loginTraveller = (req, res) => {};

module.exports = {
    registerSender,
    registerTraveller,
    loginSender,
    loginTraveller,
};
