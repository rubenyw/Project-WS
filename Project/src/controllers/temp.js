const { default: axios } = require("axios");
const express = require("express");
const Joi = require("joi");

const Temp = require("../models/temp");

const tempQuery = async (req, res) => {
    const result = await axios.get("https://api.rajaongkir.com/starter/city");

    return res.status(201).json({
        msg: "Ha",
    });
};

module.exports = {
    tempQuery,
};
